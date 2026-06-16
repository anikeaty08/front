import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnToggleAllFrames');
    if (!btn) return;
    const labelEl = btn.querySelector('[data-label]');

    const getFrames = () => Array.from(document.querySelectorAll('main details'));

    const updateLabel = () => {
      const frames = getFrames();
      const allOpen = frames.length > 0 && frames.every(d => d.hasAttribute('open'));
      if (labelEl) labelEl.textContent = allOpen ? 'Tout plier' : 'Tout déplier';
    };

    btn.addEventListener('click', () => {
      const frames = getFrames();
      const allOpen = frames.length > 0 && frames.every(d => d.hasAttribute('open'));
      if (allOpen) {
        frames.forEach(d => d.removeAttribute('open'));
      } else {
        frames.forEach(d => d.setAttribute('open', ''));
      }
      updateLabel();
    });

    updateLabel();
  });



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
  


    document.addEventListener('DOMContentLoaded', function () {
      try {
        const sections = ['relief','enseignes','boisement','energie','phases','regularisation','limitee','modification','servitudes'];
        sections.forEach(id => {
          const content = document.getElementById('content-' + id);
          if (content && content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            content.style.height = 'auto';
          }
          const chev = document.getElementById('chevron-' + id);
          if (chev) chev.style.transform = 'rotate(180deg)';
        });
        const btn = document.getElementById('btnToggleCarac');
        const labelEl = btn && btn.querySelector('[data-label]');
        if (labelEl) labelEl.textContent = 'Tout plier';
      } catch (e) {}
    });
  


  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnToggleCarac');
    if (!btn) return;
    const labelEl = btn.querySelector('[data-label]');
    const sections = ['relief','enseignes','boisement','energie','phases','regularisation','limitee','modification','servitudes'];

    const getContents = () => sections
      .map(id => document.getElementById('content-' + id))
      .filter(Boolean);

    const areAllOpen = () => {
      const contents = getContents();
      return contents.length > 0 && contents.every(c => !c.classList.contains('hidden'));
    };

    const updateLabel = () => {
      if (labelEl) labelEl.textContent = areAllOpen() ? 'Tout plier' : 'Tout déplier';
    };

    const openSection = (id, contentEl) => {
      if (!contentEl.classList.contains('hidden')) return;
      if (typeof window.toggleSection === 'function') {
        window.toggleSection(id);
      } else {
        contentEl.classList.remove('hidden');
        const chev = document.getElementById('chevron-' + id) || document.getElementById('chev-' + id);
        if (chev) chev.style.transform = 'rotate(180deg)';
        contentEl.style.height = 'auto';
      }
    };

    const closeSection = (id, contentEl) => {
      if (contentEl.classList.contains('hidden')) return;
      if (typeof window.toggleSection === 'function') {
        window.toggleSection(id);
      } else {
        contentEl.classList.add('hidden');
        const chev = document.getElementById('chevron-' + id) || document.getElementById('chev-' + id);
        if (chev) chev.style.transform = 'rotate(0deg)';
      }
    };

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const contents = getContents();
      const collapse = areAllOpen();
      contents.forEach(c => {
        const id = (c.id || '').replace('content-', '');
        if (!id) return;
        collapse ? closeSection(id, c) : openSection(id, c);
      });
      updateLabel();
    });

    updateLabel();
  });



    function toggleSection(sectionId) {
      const content = document.getElementById('content-' + sectionId);
      const chevron = document.getElementById('chevron-' + sectionId);
      const isHidden = content.classList.contains('hidden');

      if (isHidden) {
        content.classList.remove('hidden');
        content.style.height = 'auto';
        const height = content.offsetHeight + 'px';
        content.style.height = '0px';
        setTimeout(() => {
          content.style.transition = 'height 0.3s ease-out';
          content.style.height = height;
          chevron.style.transform = 'rotate(180deg)';
        }, 10);
        setTimeout(() => {
          content.style.height = 'auto';
        }, 310);
      } else {
        content.style.height = content.offsetHeight + 'px';
        content.style.transition = 'height 0.3s ease-out';
        setTimeout(() => {
          content.style.height = '0px';
          chevron.style.transform = 'rotate(0deg)';
        }, 10);
        setTimeout(() => {
          content.classList.add('hidden');
        }, 310);
      }
    }

    function toggleExpand(sectionId, event) {
      event.preventDefault();
      event.stopPropagation();
      toggleSection(sectionId);
    }

    function createToast(message) {
      const toast = document.createElement('div');
      toast.className = 'fixed bottom-5 right-5 bg-neutral-900 text-white text-sm py-2 px-4 rounded-md shadow-lg flex items-center gap-2 z-50';
      toast.style.fontFamily = "'Public Sans', sans-serif";
      toast.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle-2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
        <span>${message}</span>
      `;
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.style.transition = 'opacity 0.3s ease';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    }

    function toggleAiHelper(id) {
      const helper = document.getElementById(`ai-helper-${id}`);
      if (!helper) return;
      const isHidden = helper.classList.contains('hidden');
      if (isHidden) {
        helper.classList.remove('hidden');
        helper.style.maxHeight = '0';
        helper.style.opacity = '0';
        helper.style.transition = 'max-height 0.3s ease-out, opacity 0.3s ease-out';
        setTimeout(() => {
            helper.style.maxHeight = '500px';
            helper.style.opacity = '1';
        }, 10);
      } else {
        helper.style.maxHeight = '0';
        helper.style.opacity = '0';
        setTimeout(() => {
            helper.classList.add('hidden');
        }, 300);
      }
    }

    function applyAiPrompt(id) {
      const select = document.getElementById(`ai-prompt-select-${id}`);
      const input = document.getElementById(`ai-prompt-input-${id}`);
      if (select.value && input) {
        input.value = select.value;
      }
    }

    function generateAiContent(id) {
      const mainField = document.getElementById(`textarea-${id}`) || document.getElementById(`input-${id}`);
      const aiPrompt = document.getElementById(`ai-prompt-input-${id}`);
      const regenerateBtn = document.getElementById(`ai-regenerate-btn-${id}`);

      if (!mainField) return;

      mainField.value = `Contenu généré par l'IA basé sur la demande : "${aiPrompt.value || 'génération de base'}". Ce texte est un exemple et peut être modifié.`;
      alert("Contenu généré et inséré dans le champ.");

      if (regenerateBtn) {
        regenerateBtn.classList.remove('hidden');
      }
    }

    function saveToLibrary(id) {
      const mainField = document.getElementById(`textarea-${id}`) || document.getElementById(`input-${id}`);
      if (!mainField) return;

      const content = mainField.value;
      if (content.trim()) {
        console.log("Saving to library:", content); // Placeholder for actual save logic
        createToast("Texte enregistré dans votre bibliothèque");
      } else {
        alert("Le champ est vide, rien à enregistrer.");
      }
    }
    
    // Ensure chevrons point down on load
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('[id^="chevron-"]').forEach(chevron => {
        const sectionId = chevron.id.replace('chevron-', '');
        const content = document.getElementById('content-' + sectionId);
        if (content && !content.classList.contains('hidden')) {
          chevron.style.transform = 'rotate(180deg)';
        }
      });
    });
  


    (function(s){
      try {
        const d = s && s.closest('details');
        if (d && !d.hasAttribute('open')) d.setAttribute('open','');
      } catch(e){}
    })(document.currentScript && document.currentScript.parentElement);
  


      (function () {
        const uiBtn = document.getElementById('map-copy-ui');
        if (!uiBtn) return;
        const icon = uiBtn.querySelector('[data-icon]');
        const check = uiBtn.querySelector('[data-check]');

        function collectLegendText(root) {
          if (!root) return [];
          const out = [];

          // List items
          root.querySelectorAll('ul li').forEach(li => {
            const t = (li.textContent || '').trim();
            if (t) out.push('- ' + t);
          });

          // Paragraphs
          root.querySelectorAll('p').forEach(p => {
            const t = (p.textContent || '').trim();
            if (t) out.push(t);
          });

          // Grouped sections (title + items)
          root.querySelectorAll('.text-neutral-700').forEach(secTitle => {
            const title = (secTitle.textContent || '').trim();
            const ul = secTitle.nextElementSibling && secTitle.nextElementSibling.matches('ul') ? secTitle.nextElementSibling : null;
            const items = ul ? Array.from(ul.querySelectorAll('li')).map(li => '- ' + (li.textContent || '').trim()) : [];
            if (title) out.push(title + (items.length ? '\n' + items.join('\n') : ''));
          });

          // Deduplicate consecutive lines
          return out.filter((v, i, a) => v && (i === 0 || v !== a[i - 1]));
        }

        async function doCopy() {
          const titleEl = document.getElementById('map-title');
          const legendEl = document.getElementById('map-legend-content');

          const title = (titleEl?.textContent || '').trim();
          const legendLines = collectLegendText(legendEl);
          // Éviter les doublons: titre unique + contenu unique
          const text = [title, ...legendLines].filter(Boolean).join('\n').replace(/\n{2,}/g, '\n');

          try { await navigator.clipboard.writeText(text); } catch (e) {}

          // Feedback visuel léger
          if (icon && check) {
            icon.classList.add('hidden');
            check.classList.remove('hidden');
            setTimeout(() => {
              check.classList.add('hidden');
              icon.classList.remove('hidden');
            }, 1200);
          }
        }

        uiBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          doCopy();
        });
      })();
    


        (function () {
          // Toujours afficher le conteneur de légende (le contenu est géré plus bas)
          const legendEl = document.getElementById('map-legend');
          function ensureLegend() { legendEl?.classList.remove('hidden'); }
          document.addEventListener('DOMContentLoaded', ensureLegend);
          ensureLegend();
        })();
      


        (function () {
          const data = [
            { t: "Plan cadastral rayon de 50m", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Plancadastralrayonde50m-F7L2P.jpg" },
            { t: "Plan de situation rayon de 200m", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Plandesituationrayonde200m-rO1t2.jpg" },
            { t: "Plan de situation rayon de 500m", u: "https://cdn.cmsfly.com/2ec14af46480011651e99/images/Plandesituationrayonde500m-quoI3.jpg" },
            { t: "Schéma de développement territorial - centralités", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Schemadedeveloppementterritorial-centralites-0HFhL.jpg" },
            { t: "Plan de secteur", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Plandesecteur-vRTcp.jpg" },
            { t: "Carte d'affectation des sols", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Cartedaffectationdessols-Q-Cxo.jpg" },
            { t: "Schéma de développement communal (SDC)", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/SchemadedeveloppementcommunalSDC-JwLfn.jpg" },
            { t: "Guide communal d'urbanisme", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Guidecommunaldurbanisme-W90d1.jpg" },
            { t: "Guide régional d'urbanisme", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Guideregionaldurbanisme-K9HM_.jpg" },
            { t: "DRIGM - puits de mines et atlas du Karst wallon", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/DRIGM-puitsdeminesetatlasduKarstwallon-zYnSq.jpg" },
            { t: "Formations carbonatées", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Formationses-wSB3N.jpg" },
            { t: "Plan d'Assainissement", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/PlandAssainissement-48wtS.jpg" },
            { t: "Site classé et zone de protection", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Siteclasseetzonedeprotection-ON64p.jpg" },
            { t: "Carte archéologique", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Cartearcheologique-mLSru.jpg" },
            { t: "Nature du sol", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Naturedusol-9fVWI.jpg" },
            { t: "Nappes phréatiques, points de captage", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Nappesphreatiquespointsdecaptage-njKBG.jpg" },
            { t: "Exposition au radon", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Expositionauradon-m1ltW.jpg" }
          ];

          // Légendes par carte (indexées comme data)
          const legends = [
            { type: 'empty', items: [] }, // 0 Plan cadastral 50m
            { type: 'empty', items: [] }, // 1 Plan situation 200m  
            { type: 'empty', items: [] }, // 2 Plan situation 500m
            { type: 'list', items: ["Schéma de développement territorial (adopté le 23 avril 2024)", "Type de centralité : Centralité urbaine"] },
            { type: 'list', items: ["Habitat", "Le plan de secteur de HUY-WAREMME"] },
            { type: 'affsols' }, // Carte d'affectation des sols
            { type: 'list', items: ["61003-SSC-0001-01, AMAY (adopté le 15/12/1994)"] },
            { type: 'list', items: ["Règlement communal de bâtisse concernant la prévention des incendies dans les dancings et autres locaux où l'on danse (61003-RCB-0001-02)", "RCU d'AMAY (61003-RCU-0001-01)"] },
            { type: 'list', items: ["GRU - Accès aux personnes à mobilité réduite : 61003-RMR-0001-01 Amay, arrêté du 19/12/1984 modifié les 25/02/1999, 20/05/1999 et 25/01/2001", "GRU - Enseignes et dispositifs de publicité : 61003-REP-0001-01 Amay, arrêté du 15/11/1990, arrêté du 06/09/1991"] },
            { type: 'list', items: ["Présence de minières de fer"] },
            { type: 'list', items: ["Calcaire du Carbonifère"] },
            { type: 'p', text: "Bien situé dans le périmètre du Plan d'Assainissement par Sous-bassin Hydrographique de Meuse aval qui reprend celui-ci en zone d'assainissement collectif" },
            { type: 'grouped', sections: [
                { title: "Sur la parcelle :", items: ["61003-CLT-0010-01, AMAY/11, Les terrains en terasses avec leurs murs de soutènement, leurs murs de clôture ainsi que le chemin communal qui les longent, au lieu-dit \"Aux terrasses\" à Amay (arrêté du 19/01/1998 (classement))"] },
                { title: "À proximité de la parcelle :", items: ["61003-CLT-0010-01, AMAY/11, Les terrains en terasses avec leurs murs de soutènement, leurs murs de clôture ainsi que le chemin communal qui les longent, au lieu-dit \"Aux terrasses\" à Amay (arrêté du 19/01/1998 (classement))"] }
              ] },
            { type: 'list', items: ["61003-CAW-0001-01"] },
            { type: 'list', items: ["Sols artificiels ou non cartographiés"] },
            { type: 'grouped', sections: [
                { title: "Masse d'eau souterraine :", items: ["BERWM011, Calcaires du bassin de la Meuse bord Nord, Calcaires du Primaire, 28-11-2003", "BERWM016, Schistes houillers (masse d'eau virtuelle), Schistes houillers, 28-11-2003"] }
              ] },
            { type: 'list', items: ["Classe 1b (Amay)"] }
          ];

          const titleEl = document.getElementById('map-title');
          const indexEl = document.getElementById('map-index');
          const imgEl = document.getElementById('map-image');
          const copyBtn = document.getElementById('map-copy');
          const copiedEl = document.getElementById('map-copied');
          const prevBtn = document.getElementById('map-prev');
          const nextBtn = document.getElementById('map-next');
          const prevBtnSm = document.getElementById('map-prev-sm');
          const nextBtnSm = document.getElementById('map-next-sm');
          const viewer = document.getElementById('map-viewer');
          const progressEl = document.getElementById('map-progress');
          const indexSr = document.getElementById('map-index-sr');
          const legendWrap = document.getElementById('map-legend');
          const legendContent = document.getElementById('map-legend-content');

          function renderLegend(idx) {
            if (!legendContent || !legendWrap) return;
            const def = legends[idx] || { type: 'empty', items: [] };
            const heading = `<div class="text-[12px] font-medium text-neutral-800 tracking-tight">${data[idx]?.t || ''}</div>`;
            let body = '';

            if (def.type === 'empty') {
              body = '';
            } else if (def.type === 'list') {
              if (Array.isArray(def.items) && def.items.length) {
                body = `<ul class="list-disc pl-5 space-y-1">${def.items.map(li => `<li>${li}</li>`).join('')}</ul>`;
              }
            } else if (def.type === 'p') {
              body = `<p class="text-neutral-700">${def.text || ''}</p>`;
            } else if (def.type === 'grouped') {
              body = (def.sections || []).map(sec => `
                <div class="space-y-1">
                  <div class="text-neutral-700">${sec.title || ''}</div>
                  <ul class="list-disc pl-5 space-y-1">
                    ${(sec.items || []).map(li => `<li>${li}</li>`).join('')}
                  </ul>
                </div>
              `).join('');
            } else if (def.type === 'affsols') {
              body = `
                <div class="bg-white border border-neutral-200 rounded-md p-2">
                  <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1.5">
                    <li class="flex items-center gap-2 rounded border border-neutral-200 bg-white px-2 py-1 text-[12px] text-neutral-700"><span class="h-3 w-3 rounded-sm" style="background-color:#FACC15;"></span><span class="truncate">Sols nus</span></li>
                    <li class="flex items-center gap-2 rounded border border-neutral-200 bg-white px-2 py-1 text-[12px] text-neutral-700"><span class="h-3 w-3 rounded-sm" style="background-color:#84CC16;"></span><span class="truncate">Feuillus (<=3m)</span></li>
                    <li class="flex items-center gap-2 rounded border border-neutral-200 bg-white px-2 py-1 text-[12px] text-neutral-700"><span class="h-3 w-3 rounded-sm" style="background-color:#9CA3AF;"></span><span class="truncate">Constructions artificielles hors sol</span></li>
                    <li class="flex items-center gap-2 rounded border border-neutral-200 bg-white px-2 py-1 text-[12px] text-neutral-700"><span class="h-3 w-3 rounded-sm" style="background-color:#6B7280;"></span><span class="truncate">Revêtement artificiel au sol</span></li>
                    <li class="flex items-center gap-2 rounded border border-neutral-200 bg-white px-2 py-1 text-[12px] text-neutral-700"><span class="h-3 w-3 rounded-sm" style="background-color:#16A34A;"></span><span class="truncate">Feuillus (&gt;3m)</span></li>
                    <li class="flex items-center gap-2 rounded border border-neutral-200 bg-white px-2 py-1 text-[12px] text-neutral-700"><span class="h-3 w-3 rounded-sm" style="background-color:#22C55E;"></span><span class="truncate">Couvert herbacé toute l'année</span></li>
                  </ul>
                </div>
              `;
            }

            legendContent.innerHTML = heading + (body ? `<div class="mt-2">${body}</div>` : '');
            // Toujours afficher la légende
            legendWrap.classList.remove('hidden');
          }

          function generateCopyText(idx) {
            const item = data[idx];
            const def = legends[idx] || { type: 'empty' };
            let result = `# ${item.t}\n`;

            if (def.type === 'empty') {
              // Pas de contenu de légende
            } else if (def.type === 'list' && def.items && def.items.length) {
              result += def.items.map(li => `- ${li}`).join('\n') + '\n';
            } else if (def.type === 'p' && def.text) {
              result += `${def.text}\n`;
            } else if (def.type === 'grouped' && def.sections) {
              def.sections.forEach(sec => {
                if (sec.title) result += `${sec.title}\n`;
                if (sec.items) result += sec.items.map(li => `- ${li}`).join('\n') + '\n';
              });
            } else if (def.type === 'affsols') {
              result += '- Sols nus\n';
              result += '- Feuillus (<=3m)\n';
              result += '- Constructions artificielles hors sol\n';
              result += '- Revêtement artificiel au sol\n';
              result += '- Feuillus (>3m)\n';
              result += '- Couvert herbacé toute l\'année\n';
            }

            return result.trim();
          }

          let i = 0;
          function render() {
            const item = data[i];
            titleEl.textContent = item.t;
            indexEl.textContent = (i + 1) + '/' + data.length;
            imgEl.src = item.u;
            imgEl.alt = 'Carte: ' + item.t;
            const pct = Math.round(((i + 1) / data.length) * 100);
            if (progressEl) progressEl.style.width = pct + '%';
            if (indexSr) indexSr.textContent = 'Carte ' + (i + 1) + ' sur ' + data.length;
            renderLegend(i);
          }
          function go(delta) {
            i = (i + delta + data.length) % data.length;
            render();
          }
          function copyTitle() {
            const txt = generateCopyText(i);
            try {
              navigator.clipboard.writeText(txt).then(showCopied, showCopied);
            } catch (e) {
              showCopied();
            }
          }
          function showCopied() {
            if (!copiedEl) return;
            copiedEl.classList.remove('hidden');
            setTimeout(() => copiedEl.classList.add('hidden'), 1200);
          }

          prevBtn?.addEventListener('click', () => go(-1));
          nextBtn?.addEventListener('click', () => go(1));
          prevBtnSm?.addEventListener('click', () => go(-1));
          nextBtnSm?.addEventListener('click', () => go(1));
          copyBtn?.addEventListener('click', copyTitle);
          viewer?.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
            if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
          });

          // Initialisation
          render();
        })();
      


    (function () {
      const data = [
        { t: "Plan cadastral rayon de 50m", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Plancadastralrayonde50m-F7L2P.jpg" },
        { t: "Plan de situation rayon de 200m", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Plandesituationrayonde200m-rO1t2.jpg" },
        { t: "Plan de situation rayon de 500m", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Plandesituationrayonde500m-quoI3.jpg" },
        { t: "Schéma de développement territorial - centralités", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Schemadedeveloppementterritorial-centralites-0HFhL.jpg" },
        { t: "Plan de secteur", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Plandesecteur-vRTcp.jpg" },
        { t: "Carte d'affectation des sols", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Cartedaffectationdessols-Q-Cxo.jpg" },
        { t: "Schéma de développement communal (SDC)", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/SchemadedeveloppementcommunalSDC-JwLfn.jpg" },
        { t: "Guide communal d'urbanisme", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Guidecommunaldurbanisme-W90d1.jpg" },
        { t: "Guide régional d'urbanisme", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Guideregionaldurbanisme-K9HM_.jpg" },
        { t: "DRIGM - puits de mines et atlas du Karst wallon", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/DRIGM-puitsdeminesetatlasduKarstwallon-zYnSq.jpg" },
        { t: "Formations carbonatées", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Formationscarbonatees-wSB3N.jpg" },
        { t: "Plan d'Assainissement", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/PlandAssainissement-48wtS.jpg" },
        { t: "Site classé et zone de protection", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Siteclasseetzonedeprotection-ON64p.jpg" },
        { t: "Carte archéologique", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Cartearcheologique-mLSru.jpg" },
        { t: "Nature du sol", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Naturedusol-9fVWI.jpg" },
        { t: "Nappes phréatiques, points de captage", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Nappesphreatiquespointsdecaptage-njKBG.jpg" },
        { t: "Exposition au radon", u: "https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Expositionauradon-m1ltW.jpg" }
      ];

      const titleEl = document.getElementById('map-title');
      const indexEl = document.getElementById('map-index');
      const imgEl = document.getElementById('map-image');
      const copyBtn = document.getElementById('map-copy');
      const copiedEl = document.getElementById('map-copied');
      const prevBtn = document.getElementById('map-prev');
      const nextBtn = document.getElementById('map-next');
      const prevBtnSm = document.getElementById('map-prev-sm');
      const nextBtnSm = document.getElementById('map-next-sm');
      const viewer = document.getElementById('map-viewer');

      let i = 0;
      function render() {
        const item = data[i];
        titleEl.textContent = item.t;
        indexEl.textContent = (i + 1) + '/' + data.length;
        imgEl.src = item.u;
        imgEl.alt = 'Carte: ' + item.t;
      }
      function go(delta) {
        i = (i + delta + data.length) % data.length;
        render();
      }
      function copyTitle() {
        const txt = data[i].t;
        try {
          navigator.clipboard.writeText(txt).then(showCopied, showCopied);
        } catch (e) {
          showCopied();
        }
      }
      function showCopied() {
        if (!copiedEl) return;
        copiedEl.classList.remove('hidden');
        setTimeout(() => copiedEl.classList.add('hidden'), 1200);
      }

      prevBtn?.addEventListener('click', () => go(-1));
      nextBtn?.addEventListener('click', () => go(1));
      prevBtnSm?.addEventListener('click', () => go(-1));
      nextBtnSm?.addEventListener('click', () => go(1));
      copyBtn?.addEventListener('click', copyTitle);
      viewer?.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
        if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
      });

      // Initialisation
      render();
    })();
  


    (function(s){
      try {
        const ensureAllOpen = () => {
          document.querySelectorAll('details').forEach(d => d.setAttribute('open',''));
        };
        // Open any details already parsed
        ensureAllOpen();
        // Ensure all details are open after DOM fully parsed
        document.addEventListener('DOMContentLoaded', ensureAllOpen);
        // Ensure the current section is open immediately
        const d = s && s.closest('details');
        if (d) d.setAttribute('open','');
      } catch(e){}
    })(document.currentScript && document.currentScript.parentElement);
  


    (function () {
      const sections = [
        { key: 'derog', labelId: 'toggle-derog', chkId: 'chk-derog', chevronId: 'chev-derog', btnChevronId: 'btn-derog-chevron', contentId: 'content-derog', textId: 'derog-text', counterId: 'derog-counter', statusId: 'status-derog', sumBadgeId: 'sum-derog-badge', min: 300, chkUiId: 'chk-derog-ui', chkIconId: 'chk-derog-icon' },
        { key: 'ecart', labelId: 'toggle-ecart', chkId: 'chk-ecart', chevronId: 'chev-ecart', btnChevronId: 'btn-ecart-chevron', contentId: 'content-ecart', textId: 'ecart-text', counterId: 'ecart-counter', statusId: 'status-ecart', sumBadgeId: 'sum-ecart-badge', min: 300, chkUiId: 'chk-ecart-ui', chkIconId: 'chk-ecart-icon' }
      ];

      function setExpanded(sec, expand) {
        const label = document.getElementById(sec.labelId);
        const content = document.getElementById(sec.contentId);
        const chevron = document.getElementById(sec.chevronId);
        const chk = document.getElementById(sec.chkId);
        label?.setAttribute('aria-expanded', String(expand));
        chk && (chk.checked = expand);
        if (content) content.classList.toggle('hidden', !expand);
        if (chevron) chevron.style.transform = expand ? 'rotate(180deg)' : 'rotate(0deg)';
        // custom checkbox UI color
        const box = document.getElementById(sec.chkUiId);
        const icon = document.getElementById(sec.chkIconId);
        if (box) {
          box.classList.toggle('bg-[#649DAD]', expand);
          box.classList.toggle('border-[#649DAD]', expand);
          box.classList.toggle('border-neutral-300', !expand);
        }
        if (icon) {
          icon.classList.toggle('opacity-100', expand);
          icon.classList.toggle('opacity-0', !expand);
        }
      }

      function wireToggle(sec) {
        const label = document.getElementById(sec.labelId);
        const chk = document.getElementById(sec.chkId);
        const btnChev = document.getElementById(sec.btnChevronId);
        label?.addEventListener('click', (e) => {
          if ((e.target instanceof HTMLElement) && (e.target.closest('button') || e.target.closest('input'))) return;
          const expanded = label.getAttribute('aria-expanded') === 'true';
          setExpanded(sec, !expanded);
        });
        chk?.addEventListener('change', () => setExpanded(sec, chk.checked));
        btnChev?.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const expanded = label.getAttribute('aria-expanded') === 'true';
          setExpanded(sec, !expanded);
        });
      }

      function updateSection(sec) {
        const ta = document.getElementById(sec.textId);
        const counter = document.getElementById(sec.counterId);
        const status = document.getElementById(sec.statusId);
        const sumBadge = document.getElementById(sec.sumBadgeId);
        const len = (ta?.value || '').trim().length;
        if (counter) {
          counter.textContent = `${len}/${sec.min}`;
          counter.classList.toggle('text-red-600', len < sec.min);
          counter.classList.toggle('text-neutral-500', len >= sec.min);
        }
        const ok = len >= sec.min;
        const baseStatusClasses = 'inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium';
        if (status) {
          status.textContent = ok ? 'Complet' : 'Incomplet';
          status.className = ok ? `${baseStatusClasses} bg-[#10B981] text-white` : `${baseStatusClasses} bg-neutral-900 text-white`;
        }
        if (sumBadge) {
          sumBadge.textContent = (sec.key === 'derog' ? 'Dérogations: ' : 'Écarts: ') + (ok ? '✅' : '⚠️');
        }
      }

      // Wire sections
      sections.forEach(sec => {
        wireToggle(sec);
        const ta = document.getElementById(sec.textId);
        ta?.addEventListener('input', () => updateSection(sec));
        // initial (leave collapsed until checkbox is checked)
        updateSection(sec);
      });

      // Guide des articles
      document.getElementById('btnOpenGuide')?.addEventListener('click', () => {
        alert("Guide des articles:\n- D.IV.5: Écart à schéma/carte/guide/permis\n- D.IV.6 à D.IV.11: Hypothèses de dérogation au plan de secteur\n- D.IV.13: Dérogation au plan de secteur ou normes du guide régional");
      });
    })();
  


    (function () {
      const root = document.getElementById('aura-emezkohyg');
      if (!root) return;

      function updateCounts() {
        const reqRows = root.querySelectorAll('tr[data-section="required"]');
        const providedAll = root.querySelectorAll('tr[data-uploaded="true"]');
        const providedReq = root.querySelectorAll('tr[data-section="required"][data-uploaded="true"]');
        const cReq = root.querySelector('#count-required');
        const cProv = root.querySelector('#count-provided');
        const cMiss = root.querySelector('#count-missing');
        if (cReq) cReq.textContent = reqRows.length.toString();
        if (cProv) cProv.textContent = providedAll.length.toString();
        if (cMiss) cMiss.textContent = Math.max(0, reqRows.length - providedReq.length).toString();
      }

      root.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-action="upload"]');
        if (!btn) return;
        const row = btn.closest('tr[data-row]');
        const input = row?.querySelector('input[type="file"]');
        input && input.click();
      });

      root.addEventListener('change', (e) => {
        const input = e.target;
        if (!(input instanceof HTMLInputElement)) return;
        if (input.type !== '') return;
        const row = input.closest('tr[data-row]');
        const status = row?.querySelector('[data-status]');
        if (!row || !status) return;
        if (input.files && input.files.length) {
          row.dataset.uploaded = 'true';
          status.textContent = input.files.length === 1 ? input.files[0].name : `${input.files.length} fichiers`;
          status.classList.remove('text-neutral-500');
          status.classList.add('text-[#10B981]');
        } else {
          row.dataset.uploaded = 'false';
          status.textContent = '—';
          status.classList.add('text-neutral-500');
          status.classList.remove('text-[#10B981]');
        }
        updateCounts();
      });

      root.querySelector('#btnPlansExport')?.addEventListener('click', () => {
        window.print();
      });

      root.querySelector('#btnPlansZip')?.addEventListener('click', () => {
        const files = Array.from(root.querySelectorAll('input[type="file"]')).flatMap(i => Array.from(i.files || []));
        if (!files.length) {
          alert('Aucun plan joint pour le moment.');
          return;
        }
        alert(`${files.length} plan(s) prêt(s) pour l’export ZIP (démo).`);
      });

      updateCounts();
    })();
  


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
                  


    (function () {
      const root = document.getElementById('aura-emezm28x6');
      if (!root) return;

      // Anchor copy
      root.querySelectorAll('[data-anchor]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-anchor');
          if (!id) return;
          const url = location.origin + location.pathname + id;
          try {
            navigator.clipboard?.writeText(url);
            btn.classList.add('text-neutral-900');
            setTimeout(() => btn.classList.remove('text-neutral-900'), 900);
          } catch(e){
            // Fallback: update hash
            location.hash = id.substring(1);
          }
        });
      });

      // Collapse/Expand controls
      const collapseAll = root.querySelector('#btn-collapse-all');
      const expandAll = root.querySelector('#btn-expand-all');
      const bodies = Array.from(root.querySelectorAll('[data-acc-body]'));

      collapseAll?.addEventListener('click', () => {
        bodies.forEach(b => b.classList.add('hidden'));
      });
      expandAll?.addEventListener('click', () => {
        bodies.forEach(b => b.classList.remove('hidden'));
      });

      // Search filter
      const q = root.querySelector('#ga-search');
      function normalize(s){ return (s||'').toString().toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu,''); }
      function filter() {
        const term = normalize(q.value);
        const sections = root.querySelectorAll('section');
        sections.forEach(sec => {
          const items = sec.querySelectorAll('[data-filter-item]');
          let visibleCount = 0;
          items.forEach(it => {
            const show = !term || normalize(it.textContent).includes(term);
            it.classList.toggle('hidden', !show);
            if (show) visibleCount++;
          });
          const empty = sec.querySelector('[data-empty]');
          if (empty) empty.classList.toggle('hidden', visibleCount !== 0);
        });
      }
      q?.addEventListener('input', filter);

      // TOC active state
      const tocLinks = Array.from(root.querySelectorAll('[data-toc-link]'));
      const map = new Map(tocLinks.map(a => [a.getAttribute('data-toc-link'), a]));
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const id = '#' + entry.target.id;
          const link = map.get(id);
          if (!link) return;
          if (entry.isIntersecting) {
            tocLinks.forEach(l => l.removeAttribute('aria-current'));
            link.setAttribute('aria-current','true');
          }
        });
      }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });
      root.querySelectorAll('section[id]').forEach(sec => observer.observe(sec));

      // Floating top button
      const topBtn = root.querySelector('#btn-top-frame');
      const showThreshold = 800;
      function onScroll() {
        const y = window.scrollY || document.documentElement.scrollTop;
        if (y > showThreshold) {
          topBtn?.classList.remove('hidden');
        } else {
          topBtn?.classList.add('hidden');
        }
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      topBtn?.addEventListener('click', () => {
        const y = root.getBoundingClientRect().top + window.scrollY - 16;
        window.scrollTo({ top: y, behavior: 'smooth' });
      });

      // Initialize
      filter();
      onScroll();
    })();
  


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
  }, []);

  return (
    <>
      
<div className="min-h-screen">

<header className="sticky top-0 z-40 bg-white/80 border-neutral-200 border-b backdrop-blur">
<div className="w-full max-w-none sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="flex pt-3 pb-3 items-center justify-between">
<div className="flex items-center gap-3 sm:gap-4">
<div className="h-8 w-8 rounded-md flex items-center justify-center text-sm font-semibold tracking-tight bg-neutral-900 text-white" style={{fontFamily: '\'Public Sans\', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>A4</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 flex-wrap">
<a className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-15 text-[13px] text-neutral-700 border-neutral-200 bg-white hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900" href="#projet" id="btnBackToProject" title="Retour au projet (vue principale)">← Retour au projet</a>
<h1 className="text-[20px] sm:text-[22px] leading-tight font-semibold text-neutral-900 tracking-tight" style={{fontFamily: '\'Public Sans\', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Annexe 4 — Demande de permis d’urbanisme avec concours d’un architecte</h1>
</div>
<div className="text-[13px] text-neutral-500">Wallonie territoire — SPW | Code du développement territorial, Partie réglementaire</div>
</div>
</div>
<div className="flex gap-4 items-center">
<div className="hidden sm:flex sm:flex-col sm:items-end">
<div className="text-[13px] text-neutral-500">Adresse du projet</div>
<div className="text-sm font-medium text-neutral-900" id="headerAddress">Sol Paradis n° 2A, 4190 Ferrières</div>
</div>
<div className="flex flex-col items-end"></div>
</div>
</div><div className="flex items-center justify-end pt-2">
<button className="group inline-flex gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 transition hover:bg-neutral-50 hover:border-neutral-300 text-sm text-neutral-700 bg-white border-neutral-200 border rounded-md pt-2 pr-3 pb-2 pl-3 items-center" id="btnToggleAllFrames" title="Plier/Déplier tous les cadres">
<svg className="lucide lucide-chevrons-up-down w-4 h-4 text-neutral-700 group-hover:text-neutral-900" data-lucide="chevrons-up-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg>
<span className="" data-label="">Tout plier</span>
</button>
</div>

<div className="pb-3">
<div className="flex items-center justify-between gap-4 rounded-md border border-neutral-200 bg-white/80 p-2.5">
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<div className="text-[12px] text-neutral-500">Progression</div>
<div className="text-[12px] text-neutral-500">
<span className="font-medium text-neutral-900" id="progress-value">38%</span> validé
          </div>
</div>
<div className="h-2.5 w-full rounded-full overflow-hidden bg-neutral-100">
<div className="h-2.5 w-0 transition-all duration-500 bg-[#649DAD]" id="progress-bar" style={{width: '38%'}}></div>
</div>
</div>
<div className="flex items-center gap-1 sm:gap-2">
<button className="group inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 transition border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300" id="btnValidation" title="Basculer en mode validation">
<svg className="lucide lucide-filter w-4 h-4 text-neutral-700 group-hover:text-neutral-900" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
          Mode Validation
        </button>
<button className="group inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 transition border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300" id="btnExport" title="Exporter le document">
<svg className="lucide lucide-download w-4 h-4 text-neutral-700 group-hover:text-neutral-900" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
          Exporter
        </button>
</div>
</div>
</div>
</div></header>

<main className="py-6 px-4 sm:px-6 lg:px-8">
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

<details className="group open:shadow-sm bg-white border-neutral-200 border rounded-lg" open="">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div 'public="" -apple-system,="" arial,="" className="text-sm font-semibold tracking-tight style={{fontFamily: '='}}" roboto,="" sans',="" sans-serif;"="" segoe="" system-ui,="" ui,="">Cadre 1 — Demandeur</div>
<span className="inline-flex items-center gap-1.5 field-status-badge text-xs font-medium text-[#649DAD] bg-[#649DAD]/10 border-[#649DAD]/30 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5" data-status-badge="warning">À compléter<svg className="lucide lucide-alert-triangle w-3.5 h-3.5" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg></span>
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
<div className="">
<label className="text-[13px] text-neutral-500">Prénom</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="pf-prenom"/>
</div>
<div className="">
<label className="text-[13px] text-neutral-500">N° national</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="pf-nn"/>
</div>
<div className="sm:col-span-2">
<label className="text-[13px] text-neutral-500">Rue</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="pf-rue"/>
</div>
<div className="">
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
<input className="w-full text-sm bg-white border-neutral-200 border rounded-md mt-1 pt-2.5 pr-2.5 pb-2.5 pl-2.5" data-subfield="" data-validate="tel" id="pf-tel" type="tel"/>
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
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"></path><path className="" d="m20.385 6.585-2.97-2.97a2 2 0 0 0-2.83 0l-6.54 6.54a2 2 0 0 0-.58 1.41L7 15l3.41-.46a2 2 0 0 0 1.41-.58l6.54-6.54a2 2 0 0 0 0-2.83z"></path></svg>
      Éditer
    </button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="">
<label className="text-[13px] text-neutral-500">N° attestation Ordre</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" data-subfield="" id="arch-attest" placeholder="n° d'attestation" value="2025/BE-AR/4587"/>
</div>
</div><div className="flex gap-2 pt-6 items-center justify-end">
<button className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm bg-neutral-900 text-white hover:bg-neutral-800" id="btnC2Valider">
<svg className="lucide lucide-check-circle-2 w-4 h-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Valider le cadre
    </button>
</div>

</div>
</div>
</div>
</details>

<details className="group open:shadow-sm bg-white border-neutral-200 border rounded-lg" open="">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900" style={{fontFamily: '\'Public Sans\', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Cadre 2 — Localisation du projet / Optimisation spatiale</div>
<span className="inline-flex items-center gap-1.5 field-status-badge text-xs font-medium text-[#649DAD] bg-[#649DAD]/10 border-[#649DAD]/30 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5">À compléter<svg className="lucide lucide-alert-triangle w-3.5 h-3.5" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg></span><span className="inline-flex items-center gap-1.5 field-status-badge text-xs font-medium text-[#649DAD] bg-[#649DAD]/10 border-[#649DAD]/30 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5">À vérifier<svg className="lucide lucide-alert-triangle w-3.5 h-3.5" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg></span>
</div>
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="border-top border-neutral-200">
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4 space-y-6"><div className="sm:p-6 pt-4 pr-4 pb-4 pl-4 space-y-6">

<div className="field" data-field-id="c2-localisation" data-status="warning">
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

</div>

<div className="field" data-field-id="c2-artificialisation" data-status="warning">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-900">Parcelles cadastrales</div>
<button className="inline-flex gap-1.5 hover:bg-neutral-50 text-xs text-neutral-700 bg-white border-neutral-200 border rounded-md pt-1.5 pr-2.5 pb-1.5 pl-2.5 items-center" id="btnAddParcelle">Modifier parcelle</button>
</div>
<div className="mt-3 rounded-lg border overflow-hidden border-neutral-200">
<div className="hidden sm:grid sm:grid-cols-[140px,120px,90px,150px,160px,160px,120px,100px] border-b text-[12px] bg-neutral-50 border-neutral-200 text-neutral-600">
<div className="px-3 py-2">Commune</div>
<div className="px-3 py-2">Division</div>
<div className="px-3 py-2">Section</div>
<div className="px-3 py-2">N° et exposant</div>
<div className="px-3 py-2">Superficie cadastrée (m²)</div>
<div className="px-3 py-2">Nature cadastrale</div>
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
</div>

<div className="field" data-field-id="c2-pleine-terre" data-status="warning">
<div className="text-sm font-medium text-neutral-900 mb-2">
<span className="inline-flex items-center gap-1.5">Calcul des superficies de pleine terre<span aria-label="Informations sur la surface en pleine terre" className="relative inline-flex items-center group" tabindex="0">
<svg className="lucide lucide-info hover:text-neutral-700 cursor-pointer w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(64, 64, 64)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<path className="" d="M12 16v-4"></path>
<path className="" d="M12 8h.01"></path>
</svg>
<span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 z-10 hidden group-hover:block group-focus-within:block w-80 max-w-[90vw] whitespace-normal rounded-md border border-neutral-200 bg-neutral-50 p-3 text-[12px] leading-6 text-neutral-800 shadow-sm" role="tooltip">
<span className="font-semibold text-neutral-900">Surface en pleine terre :</span> Calculez la superficie reprenant les surfaces sans minéralisation telles que gravier, allées pavées, trottoirs pavés, parkings, terrains imperméabilisés, routes, …
          </span>
</span></span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
<div className="">
<label className="text-[13px] text-neutral-500">Superficie du terrain (a)</label>
<input className="w-full text-sm bg-neutral-50 border-neutral-200 border rounded-md mt-1 pt-2 pr-2 pb-2 pl-2" id="pt-a" min="0" placeholder="m²" readonly="" type="number"/>
</div>
<div className="">
<label className="text-[13px] text-neutral-500">Pleine terre existante (x)</label>
<input className="w-full text-sm bg-neutral-50 border-neutral-200 border rounded-md mt-1 pt-2 pr-2 pb-2 pl-2" id="pt-x" min="0" placeholder="m²" readonly="" type="number"/>
</div>
<div className="">
<label className="text-[13px] text-neutral-500">Pleine terre projetée (y)</label>
<input className="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-neutral-50" id="pt-y" min="0" placeholder="m²" readonly="" type="number"/>
</div>
<div className="">
<label className="text-[13px] text-neutral-500">% existant (x/a)</label>
<input className="w-full text-sm bg-neutral-50 border-neutral-200 border rounded-md mt-1 pt-2 pr-2 pb-2 pl-2" id="pt-xa" readonly="" type="text"/>
</div>
<div className="">
<label className="text-[13px] text-neutral-500">% projeté (y/a)</label>
<input className="mt-1 w-full rounded-md border p-2 text-sm border-neutral-200 bg-neutral-50" id="pt-ya" readonly="" type="text"/>
</div>
</div>
</div>

<div className="field" data-field-id="c2-imper" data-status="warning">
<div className="text-sm font-medium text-neutral-900 mb-2"><span className="inline-flex items-center gap-1.5">Calcul des surfaces imperméabilisées<span aria-label="Informations sur les surfaces imperméabilisées" className="relative inline-flex items-center group" tabindex="0"><svg className="lucide lucide-info hover:text-neutral-700 cursor-pointer w-[16px] h-[16px]" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg><span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 z-10 hidden group-hover:block group-focus-within:block w-80 max-w-[90vw] whitespace-normal rounded-md border border-neutral-200 bg-neutral-50 p-3 text-[12px] leading-6 text-neutral-800 shadow-sm" role="tooltip">Surface recouverte de manière permanente par un matériau artificiel imperméable tel que asphalte ou béton.</span></span></span></div>
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
</div>
</div>
</div>

<div className="flex gap-2 pt-6 items-center justify-end">
<button className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm bg-neutral-900 text-white hover:bg-neutral-800" id="btnC2Valider">
<svg className="lucide lucide-check-circle-2 w-4 h-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Valider le cadre
    </button>
</div>
</div>

<div className="field" data-field-id="c2-optim" data-status="warning">
</div>

</div>
</div>
</details>

<details className="group rounded-lg border open:shadow-sm border-neutral-200 bg-white" id="cadre-3" open="">
<summary className="cursor-pointer select-none">
<div className="flex pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900">Cadre 3 — Objet de la demande</div>
<span className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium border-[#649DAD]/30 bg-[#649DAD]/10 text-[#649DAD]">
                      À compléter
                    </span>
</div>
<svg className="transition-transform group-open:rotate-180 w-[16px] h-[16px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(115, 115, 115)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4 space-y-6">
<div className="">
<label className="text-[13px] text-neutral-500" htmlFor="textarea-description">Description succincte du projet</label>
<div className="text-[12px] text-neutral-600 mt-1 mb-2">Décrivez l'entièreté du projet et le but des travaux : précisez l'activité accueillie, existante et/ou projetée, dans les bâtiments ou sur le terrain, les éventuelles démolitions, transformations, les nouvelles constructions ou installations, création de logements, aménagement des abords, etc.</div>
<div className="space-y-2">
<textarea className="w-full focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors text-sm bg-white border-neutral-200 border rounded-md pt-2.5 pr-2.5 pb-2.5 pl-2.5" id="textarea-description" placeholder="Précisez l'objet du projet en quelques mots, puis détaillez les affectations et surfaces. Ces informations permettent d'orienter l'instruction (publicité, incidences, avis consultatifs)." rows="10"></textarea>
<div className="flex items-center justify-end">
<button className="inline-flex gap-1.5 hover:bg-neutral-100 transition-colors text-sm text-neutral-600 rounded-md pt-2 pr-3 pb-2 pl-3 items-center" onclick="toggleAiHelper('description')" title="Ouvrir les suggestions IA">
<svg className="lucide lucide-sparkles w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(82, 82, 82)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
<path className="" d="M5 3v4"></path>
<path className="" d="M19 17v4"></path>
<path className="" d="M3 5h4"></path>
<path className="" d="M17 19h4"></path>
</svg>
          Aide IA
        </button>
</div>
<div className="space-y-3 rounded-md border border-neutral-200 bg-neutral-50/60 p-3 hidden" id="ai-helper-description" style={{maxHeight: '0px', opacity: '0', transition: 'max-height 0.3s ease-out, opacity 0.3s ease-out'}}>
<select className="w-full rounded-md border border-neutral-200 bg-white p-2 text-sm text-neutral-600 focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="ai-prompt-select-description" onchange="applyAiPrompt('description')">
<option disabled="" selected="" value="">Suggestions de prompts...</option>
<option value="Générer une première version de la description du projet.">Générer une première version</option>
<option value="Lister les contraintes potentielles liées au projet.">Lister les contraintes</option>
<option value="Simplifier la rédaction de la description actuelle.">Simplifier la rédaction</option>
<option value="Vérifier et corriger l'orthographe et la grammaire.">Vérifier l’orthographe</option>
</select>
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="ai-prompt-input-description" placeholder="Décrivez ce que vous voulez que l’IA fasse..." rows="2"></textarea>
<div className="flex items-center justify-between">
<button className="hidden inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" id="ai-regenerate-btn-description" onclick="generateAiContent('description')">
<svg className="lucide lucide-refresh-cw" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
<path className="" d="M21 3v5h-5"></path>
<path className="" d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
<path className="" d="M3 21v-5h5"></path>
</svg>
            Régénérer
          </button>
<div className="flex items-center gap-2 ml-auto">
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" onclick="saveToLibrary('description')">
<svg className="lucide lucide-library" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m16 6 4 14"></path>
<path className="" d="M12 6v14"></path>
<path className="" d="M8 8v12"></path>
<path className="" d="M4 4v16"></path>
</svg>
              Enregistrer
            </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-transparent bg-[#649DAD] px-3 py-2 text-sm font-medium text-white hover:bg-opacity-90 transition-colors" onclick="generateAiContent('description')">
              Générer
            </button>
</div>
</div>
</div>
</div>
</div>
<div className="">
<div className="text-sm font-medium text-neutral-900 mb-4">Cochez les caractéristiques de votre projet </div><div className="flex -mt-1 mb-3 items-center justify-end">
<button className="group inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900" id="btnToggleCarac" title="Plier/Déplier les sections" type="button">
<svg className="lucide lucide-chevrons-up-down group-hover:text-neutral-900-[14px] h-[14px]" data-icon-replaced="true" data-lucide="chevrons-up-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg>
<span data-label="">Tout plier</span>
</button>

</div>
<div className="space-y-3">

<div className="border rounded-lg border-neutral-200 bg-white overflow-hidden">
<label className="flex items-center justify-between gap-3 cursor-pointer hover:bg-neutral-50/50 transition-colors pt-4 pr-4 pb-4 pl-4" htmlFor="particularite-relief">
<div className="flex items-center gap-3">
<div className="relative flex-shrink-0">
<input className="sr-only peer" id="particularite-relief" onchange="toggleSection('relief')" type="checkbox"/>
<div className="w-5 h-5 peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20 transition-all duration-200 flex bg-white border-neutral-300 border-2 rounded items-center justify-center">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
<span className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700">Modification sensible du relief du sol<span aria-label="Informations sur la modification sensible du relief du sol" className="relative inline-flex items-center group" tabindex="0">
<svg className="lucide lucide-info hover:text-neutral-700 cursor-pointer w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(64, 64, 64)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<path className="" d="M12 16v-4"></path>
<path className="" d="M12 8h.01"></path>
</svg>
<span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 z-10 hidden group-hover:block group-focus-within:block w-80 max-w-[90vw] whitespace-normal rounded-md border border-neutral-200 bg-neutral-50 p-3 text-[12px] leading-6 text-neutral-800 shadow-sm" role="tooltip">
<span className="font-semibold text-neutral-900">Modification sensible du relief du sol :</span> Une modification est sensible si une des conditions suivantes est rencontrées : les remblais ou déblais font plus de 40m³, hauteur modifiée sur plus de 50cm par rapport au niveau naturel, située à moins de 2m de la limite mitoyenne, sur un axe de concentration naturel des eaux de ruissellement, dans une zone d'aléa d'inondation, modifie le système de drainage d'une wateringue, dans un site de conservation de la nature, de grand intérêt biologique ou dans une zone naturelle, modifie le relief des berges d'un cours d'eau.
  </span>
</span></span>
</div>
<button aria-label="Déplier" className="hover:bg-neutral-100 transition-colors rounded-full pt-1 pr-1 pb-1 pl-1" onclick="toggleExpand('relief', event)" type="button">
<svg className="transition-transform duration-200 w-[16px] h-[16px]" data-icon-replaced="true" fill="none" id="chevron-relief" stroke="currentColor" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(115, 115, 115)', transform: 'rotate(180deg)'}} viewbox="0 0 24 24">
<path className="" d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</label>
<div className="overflow-hidden" id="content-relief" style={{height: 'auto'}}>
<div className="border-t border-neutral-200 px-4 pt-3 pb-4">
<div className="text-sm text-neutral-600 bg-neutral-50 border-neutral-200 border rounded-md mb-3 pt-3 pr-3 pb-3 pl-3">Précisez le cubage des terres déplacées. Indiquez la nature des terres évacuées et/ou la nature et origine des terres amenées</div>
<div className="space-y-2">
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="textarea-relief" placeholder="Décrivez les modifications du relief, le cubage des terres..." rows="3"></textarea>
<div className="flex items-center justify-end">
<button className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" onclick="toggleAiHelper('relief')" title="Ouvrir les suggestions IA">
<svg className="lucide lucide-sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
<path className="" d="M5 3v4"></path>
<path className="" d="M19 17v4"></path>
<path className="" d="M3 5h4"></path>
<path className="" d="M17 19h4"></path>
</svg> Aide IA
                </button>
</div>
<div className="hidden space-y-3 rounded-md border border-neutral-200 bg-neutral-50/60 p-3" id="ai-helper-relief">
<select className="w-full rounded-md border border-neutral-200 bg-white p-2 text-sm text-neutral-600 focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="ai-prompt-select-relief" onchange="applyAiPrompt('relief')">
<option disabled="" selected="" value="">Suggestions de prompts...</option>
<option value="Générer une description des modifications du relief.">Générer une première version</option>
<option value="Simplifier la description technique.">Simplifier la rédaction</option>
<option value="Vérifier et corriger l'orthographe et la grammaire.">Vérifier l'orthographe</option>
</select>
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="ai-prompt-input-relief" placeholder="Décrivez ce que vous voulez que l'IA fasse..." rows="2"></textarea>
<div className="flex items-center justify-between">
<button className="hidden inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" id="ai-regenerate-btn-relief" onclick="generateAiContent('relief')">
<svg className="lucide lucide-refresh-cw" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
<path className="" d="M21 3v5h-5"></path>
<path className="" d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
<path className="" d="M3 21v-5h5"></path>
</svg> Régénérer
                  </button>
<div className="flex items-center gap-2 ml-auto">
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" onclick="saveToLibrary('relief')">
<svg className="lucide lucide-library" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m16 6 4 14"></path>
<path className="" d="M12 6v14"></path>
<path className="" d="M8 8v12"></path>
<path className="" d="M4 4v16"></path>
</svg> Enregistrer
                    </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-transparent bg-[#649DAD] px-3 py-2 text-sm font-medium text-white hover:bg-opacity-90 transition-colors" onclick="generateAiContent('relief')">Générer</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border rounded-lg border-neutral-200 bg-white overflow-hidden">
<label className="flex items-center justify-between gap-3 cursor-pointer hover:bg-neutral-50/50 transition-colors pt-4 pr-4 pb-4 pl-4" htmlFor="particularite-enseignes">
<div className="flex items-center gap-3">
<div className="relative flex-shrink-0">
<input className="sr-only peer" id="particularite-enseignes" onchange="toggleSection('enseignes')" type="checkbox"/>
<div className="w-5 h-5 peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20 transition-all duration-200 flex bg-white border-neutral-300 border-2 rounded items-center justify-center">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
<span className="text-sm font-medium text-neutral-700">Enseignes et dispositifs de publicité</span>
</div>
<button aria-label="Déplier" className="p-1 hover:bg-neutral-100 rounded-full transition-colors" onclick="toggleExpand('enseignes', event)" type="button">
<svg className="w-4 h-4 text-neutral-500 transition-transform duration-200" fill="none" id="chevron-enseignes" stroke="currentColor" style={{transform: 'rotate(180deg)'}} viewbox="0 0 24 24">
<path className="" d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</label>
<div className="overflow-hidden" id="content-enseignes" style={{height: 'auto'}}>
<div className="border-t border-neutral-200 px-4 pt-3 pb-4">
<div className="text-sm text-neutral-600 mb-3 p-3 bg-neutral-50 rounded-md border border-neutral-200">Précisez les caractéristiques (nombre, formes et dimensions, matériaux et tonalité, spécificités : lumineuse, éclairage, lettrage ou logo, etc.) ainsi que leur localisation (au sol, sur poteau ou totem, perpendiculaire ou parallèle à la façade, apposées sur une vitrine, etc.).</div>
<div className="space-y-2">
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="textarea-enseignes" placeholder="Décrivez les enseignes : nombre, dimensions, matériaux..." rows="3"></textarea>
<div className="flex items-center justify-end">
<button className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" onclick="toggleAiHelper('enseignes')" title="Ouvrir les suggestions IA">
<svg className="lucide lucide-sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
<path className="" d="M5 3v4"></path>
<path className="" d="M19 17v4"></path>
<path className="" d="M3 5h4"></path>
<path className="" d="M17 19h4"></path>
</svg> Aide IA
                </button>
</div>
<div className="hidden space-y-3 rounded-md border border-neutral-200 bg-neutral-50/60 p-3" id="ai-helper-enseignes">
<select className="w-full rounded-md border border-neutral-200 bg-white p-2 text-sm text-neutral-600 focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="ai-prompt-select-enseignes" onchange="applyAiPrompt('enseignes')">
<option disabled="" selected="" value="">Suggestions de prompts...</option>
<option value="Générer une description technique pour une enseigne lumineuse.">Générer une description</option>
<option value="Lister les points de conformité à vérifier pour une enseigne.">Lister les contraintes</option>
<option value="Vérifier et corriger l'orthographe et la grammaire.">Vérifier l'orthographe</option>
</select>
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="ai-prompt-input-enseignes" placeholder="Décrivez ce que vous voulez que l'IA fasse..." rows="2"></textarea>
<div className="flex items-center justify-between">
<button className="hidden inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" id="ai-regenerate-btn-enseignes" onclick="generateAiContent('enseignes')">
<svg className="lucide lucide-refresh-cw" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
<path className="" d="M21 3v5h-5"></path>
<path className="" d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
<path className="" d="M3 21v-5h5"></path>
</svg> Régénérer
                  </button>
<div className="flex items-center gap-2 ml-auto">
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" onclick="saveToLibrary('enseignes')">
<svg className="lucide lucide-library" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m16 6 4 14"></path>
<path className="" d="M12 6v14"></path>
<path className="" d="M8 8v12"></path>
<path className="" d="M4 4v16"></path>
</svg> Enregistrer
                    </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-transparent bg-[#649DAD] px-3 py-2 text-sm font-medium text-white hover:bg-opacity-90 transition-colors" onclick="generateAiContent('enseignes')">Générer</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="border rounded-lg border-neutral-200 bg-white overflow-hidden">
<label className="flex items-center justify-between gap-3 p-4 cursor-pointer hover:bg-neutral-50/50 transition-colors" htmlFor="particularite-boisement">
<div className="flex items-center gap-3">
<div className="relative flex-shrink-0">
<input className="sr-only peer" id="particularite-boisement" onchange="toggleSection('boisement')" type="checkbox"/>
<div className="w-5 h-5 peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20 transition-all duration-200 flex bg-white border-neutral-300 border-2 rounded items-center justify-center">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
<span className="text-sm font-medium text-neutral-700">Boisement / Déboisement / Abattage</span>
</div>
<button aria-label="Déplier" className="p-1 hover:bg-neutral-100 rounded-full transition-colors" onclick="toggleExpand('boisement', event)" type="button">
<svg className="w-4 h-4 text-neutral-500 transition-transform duration-200" fill="none" id="chevron-boisement" stroke="currentColor" style={{transform: 'rotate(180deg)'}} viewbox="0 0 24 24">
<path className="" d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</label>
<div className="overflow-hidden" id="content-boisement" style={{height: 'auto'}}>
<div className="border-t border-neutral-200 px-4 pt-3 pb-4">
<div className="text-sm text-neutral-600 mb-3 p-3 bg-neutral-50 rounded-md border border-neutral-200">Présentez les actes et travaux projetés (nature de la végétation, nombre d'arbres, âge supposé), le but poursuivi par les travaux, la période envisagée des travaux ainsi que les éventuelles mesures de replantation après les travaux (essence et nombre).</div>
<div className="space-y-2">
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="textarea-boisement" placeholder="Détaillez les travaux de boisement/déboisement..." rows="3"></textarea>
<div className="flex items-center justify-end">
<button className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" onclick="toggleAiHelper('boisement')" title="Ouvrir les suggestions IA">
<svg className="lucide lucide-sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
<path className="" d="M5 3v4"></path>
<path className="" d="M19 17v4"></path>
<path className="" d="M3 5h4"></path>
<path className="" d="M17 19h4"></path>
</svg> Aide IA
                </button>
</div>
<div className="hidden space-y-3 rounded-md border border-neutral-200 bg-neutral-50/60 p-3" id="ai-helper-boisement">
<select className="w-full rounded-md border border-neutral-200 bg-white p-2 text-sm text-neutral-600 focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="ai-prompt-select-boisement" onchange="applyAiPrompt('boisement')">
<option disabled="" selected="" value="">Suggestions de prompts...</option>
<option value="Générer une description des travaux d'abattage et de replantation prévus.">Générer une description</option>
<option value="Proposer des essences d'arbres locales pour la replantation.">Proposer des essences</option>
<option value="Vérifier et corriger l'orthographe et la grammaire.">Vérifier l'orthographe</option>
</select>
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="ai-prompt-input-boisement" placeholder="Décrivez ce que vous voulez que l'IA fasse..." rows="2"></textarea>
<div className="flex items-center justify-between">
<button className="hidden inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" id="ai-regenerate-btn-boisement" onclick="generateAiContent('boisement')">
<svg className="lucide lucide-refresh-cw" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
<path className="" d="M21 3v5h-5"></path>
<path className="" d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
<path className="" d="M3 21v-5h5"></path>
</svg> Régénérer
                  </button>
<div className="flex items-center gap-2 ml-100 transition-colors">
<svg className="lucide lucide-library" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m16 6 4 14"></path>
<path className="" d="M12 6v14"></path>
<path className="" d="M8 8v12"></path>
<path className="" d="M4 4v16"></path>
</svg> Enregistrer
                    
                    <button className="inline-flex items-center gap-1.5 rounded-md border border-transparent bg-[#649DAD] px-3 py-2 text-sm font-medium text-white hover:bg-opacity-90 transition-colors" onclick="generateAiContent('boisement')">Générer</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="border rounded-lg border-neutral-200 bg-white overflow-hidden">
<label className="flex items-center justify-between gap-3 p-4 cursor-pointer hover:bg-neutral-50/50 transition-colors" htmlFor="particularite-energie">
<div className="flex items-center gap-3">
<div className="relative flex-shrink-0">
<input className="sr-only peer" id="particularite-energie" onchange="toggleSection('energie')" type="checkbox"/>
<div className="w-5 h-5 peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20 transition-all duration-200 flex bg-white border-neutral-300 border-2 rounded items-center justify-center">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
<span className="text-sm font-medium text-neutral-700">Module de production d'énergie</span>
</div>
<button aria-label="Déplier" className="p-1 hover:bg-neutral-100 rounded-full transition-colors" onclick="toggleExpand('energie', event)" type="button">
<svg className="w-4 h-4 text-neutral-500 transition-transform duration-200" fill="none" id="chevron-energie" stroke="currentColor" style={{transform: 'rotate(180deg)'}} viewbox="0 0 24 24">
<path className="" d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</label>
<div className="overflow-hidden" id="content-energie" style={{height: 'auto'}}>
<div className="border-t border-neutral-200 px-4 pt-3 pb-4">
<div className="text-sm text-neutral-600 bg-neutral-50 border-neutral-200 border rounded-md mb-3 pt-3 pr-3 pb-3 pl-3">Précisez la puissance du module.</div>
<div className="space-y-2">
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="textarea-energie" placeholder="Précisez la puissance du module..." rows="3"></textarea>
<div className="flex items-center justify-end">
<button className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" onclick="toggleAiHelper('energie')" title="Ouvrir les suggestions IA">
<svg className="lucide lucide-sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path className="" d="M5 3v4"></path><path className="" d="M19 17v4"></path><path className="" d="M3 5h4"></path><path className="" d="M17 19h4"></path></svg> Aide IA
                </button>
</div>
<div className="hidden space-y-3 rounded-md border border-neutral-200 bg-neutral-50/60 p-3" id="ai-helper-energie">
<select className="w-full rounded-md border border-neutral-200 bg-white p-2 text-sm text-neutral-600 focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="ai-prompt-select-energie" onchange="applyAiPrompt('energie')">
<option disabled="" selected="" value="">Suggestions de prompts...</option>
<option value="Générer une description de la puissance du module.">Générer une description</option>
<option value="Vérifier et corriger l'orthographe et la grammaire.">Vérifier l'orthographe</option>
</select>
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="ai-prompt-input-energie" placeholder="Décrivez ce que vous voulez que l'IA fasse..." rows="2"></textarea>
<div className="flex items-center justify-between">
<button className="hidden inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" id="ai-regenerate-btn-energie" onclick="generateAiContent('energie')">
<svg className="lucide lucide-refresh-cw" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path className="" d="M21 3v5h-5"></path><path className="" d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path className="" d="M3 21v-5h5"></path></svg> Régénérer
                  </button>
<div className="flex items-center gap-2 ml-auto">
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" onclick="saveToLibrary('energie')">
<svg className="lucide lucide-library" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="m16 6 4 14"></path><path className="" d="M12 6v14"></path><path className="" d="M8 8v12"></path><path className="" d="M4 4v16"></path></svg> Enregistrer
                    </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-transparent bg-[#649DAD] px-3 py-2 text-sm font-medium text-white hover:bg-opacity-90 transition-colors" onclick="generateAiContent('energie')">Générer</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="border rounded-lg border-neutral-200 bg-white overflow-hidden">
<label className="flex items-center justify-between gap-3 cursor-pointer hover:bg-neutral-50/50 transition-colors pt-4 pr-4 pb-4 pl-4" htmlFor="particularite-phases">
<div className="flex items-center gap-3">
<div className="relative flex-shrink-0">
<input className="sr-only peer" id="particularite-phases" onchange="toggleSection('phases')" type="checkbox"/>
<div className="w-5 h-5 peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20 transition-all duration-200 flex bg-white border-neutral-300 border-2 rounded items-center justify-center">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
<span className="text-sm font-medium text-neutral-700">Mise en œuvre par phases</span>
</div>
<button aria-label="Déplier" className="p-1 hover:bg-neutral-100 rounded-full transition-colors" onclick="toggleExpand('phases', event)" type="button">
<svg className="w-4 h-4 text-neutral-500 transition-transform duration-200" fill="none" id="chevron-phases" stroke="currentColor" style={{transform: 'rotate(180deg)'}} viewbox="0 0 24 24">
<path className="" d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</label>
<div className="overflow-hidden" id="content-phases" style={{height: 'auto'}}>
<div className="border-t border-neutral-200 px-4 pt-3 pb-4">
<div className="text-sm text-neutral-600 mb-3 p-3 bg-neutral-50 rounded-md border border-neutral-200">Si la mise en œuvre du projet est souhaitée par phases (si vous souhaitez notamment que la date de péremption de votre permis soit alignée sur ces phases), précisez la description du phasage ainsi que la date ou période souhaitée pour la seconde phase et les éventuelles phases ultérieures :</div>
<div className="space-y-2">
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="textarea-phases" placeholder="Décrivez le phasage, les dates..." rows="3"></textarea>
<div className="flex items-center justify-end">
<button className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" onclick="toggleAiHelper('phases')" title="Ouvrir les suggestions IA">
<svg className="lucide lucide-sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path className="" d="M5 3v4"></path><path className="" d="M19 17v4"></path><path className="" d="M3 5h4"></path><path className="" d="M17 19h4"></path></svg> Aide IA
                </button>
</div>
<div className="hidden space-y-3 rounded-md border border-neutral-200 bg-neutral-50/60 p-3" id="ai-helper-phases">
<select className="w-full rounded-md border border-neutral-200 bg-white p-2 text-sm text-neutral-600 focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="ai-prompt-select-phases" onchange="applyAiPrompt('phases')">
<option disabled="" selected="" value="">Suggestions de prompts...</option>
<option value="Générer une description de phasage pour un projet de construction.">Générer une description</option>
<option value="Vérifier et corriger l'orthographe et la grammaire.">Vérifier l'orthographe</option>
</select>
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="ai-prompt-input-phases" placeholder="Décrivez ce que vous voulez que l'IA fasse..." rows="2"></textarea>
<div className="flex items-center justify-between">
<button className="hidden inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" id="ai-regenerate-btn-phases" onclick="generateAiContent('phases')">
<svg className="lucide lucide-refresh-cw" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path className="" d="M21 3v5h-5"></path><path className="" d="M21 12a9 9 0 0 1-9 9 9.75 9.3 16"></path><path className="" d="M3 21v-5h5"></path></svg> Régénérer
                  </button>
<div className="flex items-center gap-2 ml-auto">
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" onclick="saveToLibrary('phases')">
<svg className="lucide lucide-library" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="m16 6 4 1-center gap-1.5 rounded-md border border-transparent bg-[#649DAD] px-3 py-2 text-sm font-medium text-white hover:bg-opacity-90 transition-colors">Générer</path></svg></button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="border rounded-lg border-neutral-200 bg-white overflow-hidden">
<label className="flex items-center justify-between gap-3 p-4 cursor-pointer hover:bg-neutral-50/50 transition-colors" htmlFor="particularite-regularisation">
<div className="flex items-center gap-3">
<div className="relative flex-shrink-0">
<input className="sr-only peer" id="particularite-regularisation" onchange="toggleSection('regularisation')" type="checkbox"/>
<div className="w-5 h-5 peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20 transition-all duration-200 flex bg-white border-neutral-300 border-2 rounded items-center justify-center">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
<span className="text-sm font-medium text-neutral-700">Régularisation de travaux</span>
</div>
<button aria-label="Déplier" className="p-1 hover:bg-neutral-100 rounded-full transition-colors" onclick="toggleExpand('regularisation', event)" type="button">
<svg className="w-4 h-4 text-neutral-500 transition-transform duration-200" fill="none" id="chevron-regularisation" stroke="currentColor" style={{transform: 'rotate(180deg)'}} viewbox="0 0 24 24">
<path className="" d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</label>
<div className="overflow-hidden" id="content-regularisation" style={{height: 'auto'}}>
<div className="border-t border-neutral-200 px-4 pt-3 pb-4">
<div className="text-sm text-neutral-600 mb-3 p-3 bg-neutral-50 rounded-md border border-neutral-200">Si le projet concerne une régularisation de travaux effectués sans permis ou non conformément au permis délivré, décrivez les actes et travaux dont la régularisation est demandée et précisez les éléments probants permettant de démontrer la date de leur réalisation.</div>
<div className="space-y-2">
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="textarea-regularisation" placeholder="Décrivez les travaux à régulariser..." rows="3"></textarea>
<div className="flex items-center justify-end">
<button className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" onclick="toggleAiHelper('regularisation')" title="Ouvrir les suggestions IA">
<svg className="lucide lucide-sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path className="" d="M5 3v4"></path><path className="" d="M19 17v4"></path><path className="" d="M3 5h4"></path><path className="" d="M17 19h4"></path></svg> Aide IA
                </button>
</div>
<div className="hidden space-y-3 rounded-md border border-neutral-200 bg-neutral-50/60 p-3" id="ai-helper-regularisation">
<select className="w-full rounded-md border border-neutral-200 bg-white p-2 text-sm text-neutral-600 focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="ai-prompt-select-regularisation" onchange="applyAiPrompt('regularisation')">
<option disabled="" selected="" value="">Suggestions de prompts...</option>
<option value="Générer une description des travaux à régulariser.">Générer une description</option>
<option value="Lister les types d'éléments probants possibles.">Lister les preuves</option>
<option value="Vérifier et corriger l'orthographe et la grammaire.">Vérifier l'orthographe</option>
</select>
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="ai-prompt-input-regularisation" placeholder="Décrivez ce que vous voulez que l'IA fasse..." rows="2"></textarea>
<div className="flex items-center justify-between">
<button className="hidden inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" id="ai-regenerate-btn-regularisation" onclick="generateAiContent('regularisation')">
<svg className="lucide lucide-refresh-cw" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path className="" d="M21 3v5h-5"></path><path className="" d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path className="" d="M3 21v-5h5"></path></svg> Régénérer
                  </button>
<div className="flex items-center gap-2 ml-auto">
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" onclick="saveToLibrary('regularisation')">
<svg className="lucide lucide-library" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="m16 6 4 14"></path><path className="" d="M12 6v14"></path><path className="" d="M8 8v12"></path><path className="" d="M4 4v16"></path></svg> Enregistrer
                    </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-transparent bg-[#649DAD] px-3 py-2 text-sm font-medium text-white hover:bg-opacity-90 transition-colors" onclick="generateAiContent('regularisation')">Générer</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="border rounded-lg border-neutral-200 bg-white overflow-hidden">
<label className="flex items-center justify-between gap-3 p-4 cursor-pointer hover:bg-neutral-50/50 transition-colors" htmlFor="particularite-limitee">
<div className="flex items-center gap-3">
<div className="relative flex-shrink-0">
<input className="sr-only peer" id="particularite-limitee" onchange="toggleSection('limitee')" type="checkbox"/>
<div className="w-5 h-5 peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20 transition-all duration-200 flex bg-white border-neutral-300 border-2 rounded items-center justify-center">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
<span className="text-sm font-medium text-neutral-700">Permis à durée limitée</span>
</div>
<button aria-label="Déplier" className="p-1 hover:bg-neutral-100 rounded-full transition-colors" onclick="toggleExpand('limitee', event)" type="button">
<svg className="w-4 h-4 text-neutral-500 transition-transform duration-200" fill="none" id="chevron-limitee" stroke="currentColor" style={{transform: 'rotate(180deg)'}} viewbox="0 0 24 24">
<path className="" d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</label>
<div className="overflow-hidden" id="content-limitee" style={{height: 'auto'}}>
<div className="border-t border-neutral-200 px-4 pt-3 pb-4">
<div className="text-sm text-neutral-600 bg-neutral-50 border-neutral-200 border rounded-md mb-3 pt-3 pr-3 pb-3 pl-3">Précisez et justifiez la durée désirée.</div>
<div className="space-y-2">
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="textarea-limitee" placeholder="Précisez et justifiez la durée..." rows="3"></textarea>
<div className="flex items-center justify-end">
<button className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" onclick="toggleAiHelper('limitee')" title="Ouvrir les suggestions IA">
<svg className="lucide lucide-sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path className="" d="M5 3v4"></path><path className="" d="M19 17v4"></path><path className="" d="M3 5h4"></path><path className="" d="M17 19h4"></path></svg> Aide IA
                </button>
</div>
<div className="hidden space-y-3 rounded-md border border-neutral-200 bg-neutral-50/60 p-3" id="ai-helper-limitee">
<select className="w-full rounded-md border border-neutral-200 bg-white p-2 text-sm text-neutral-600 focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="ai-prompt-select-limitee" onchange="applyAiPrompt('limitee')">
<option disabled="" selected="" value="">Suggestions de prompts...</option>
<option value="Générer une justification pour un permis à durée limitée.">Générer une justification</option>
<option value="Vérifier et corriger l'orthographe et la grammaire.">Vérifier l'orthographe</option>
</select>
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="ai-prompt-input-limitee" placeholder="Décrivez ce que vous voulez que l'IA fasse..." rows="2"></textarea>
<div className="flex items-center justify-between">
<button className="hidden inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" id="ai-regenerate-btn-limitee" onclick="generateAiContent('limitee')">
<svg className="lucide lucide-refresh-cw" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path className="" d="M21 3v5h-5"></path><path className="" d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path className="" d="M3 21v-5h5"></path></svg> Régénérer
                  </button>
<div className="flex items-center gap-2 ml-auto">
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" onclick="saveToLibrary('limitee')">
<svg className="lucide lucide-library" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="m16 6 4 14"></path><path className="" d="M12 6v14"></path><path className="" d="M8 8v12"></path><path className="" d="M4 4v16"></path></svg> Enregistrer
                    </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-transparent bg-[#649DAD] px-3 py-2 text-sm font-medium text-white hover:bg-opacity-90 transition-colors" onclick="generateAiContent('limitee')">Générer</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="border rounded-lg border-neutral-200 bg-white overflow-hidden">
<label className="flex items-center justify-between gap-3 cursor-pointer hover:bg-neutral-50/50 transition-colors pt-4 pr-4 pb-4 pl-4" htmlFor="particularite-modification">
<div className="flex items-center gap-3">
<div className="relative flex-shrink-0">
<input className="sr-only peer" id="particularite-modification" onchange="toggleSection('modification')" type="checkbox"/>
<div className="w-5 h-5 peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20 transition-all duration-200 flex bg-white border-neutral-300 border-2 rounded items-center justify-center">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
<span className="text-sm font-medium text-neutral-700">Modification d'un permis existant</span>
</div>
<button aria-label="Déplier" className="p-1 hover:bg-neutral-100 rounded-full transition-colors" onclick="toggleExpand('modification', event)" type="button">
<svg className="w-4 h-4 text-neutral-500 transition-transform duration-200" fill="none" id="chevron-modification" stroke="currentColor" style={{transform: 'rotate(180deg)'}} viewbox="0 0 24 24">
<path className="" d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</label>
<div className="overflow-hidden" id="content-modification" style={{height: 'auto'}}>
<div className="border-neutral-200 border-t pt-3 pr-4 pb-4 pl-4">
<div className="text-sm text-neutral-600 bg-neutral-50 border-neutral-200 border rounded-md mb-3 pt-3 pr-3 pb-3 pl-3">Décrivez les actes et travaux en lien avec la modification projetée, la situation existante correspondant à la situation autorisée dans le permis initialement délivré.</div>
<div className="space-y-2">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="">
<label className="text-[13px] text-neutral-500" htmlFor="mod-ref-initial">Référence du permis initial</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="mod-ref-initial" placeholder="Ex.: PU/2019/1234 ou n° d’enregistrement" type="text"/>
</div>
<div>
<label className="text-[13px] text-neutral-500" htmlFor="mod-date-delivrance">Date de délivrance</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="mod-date-delivrance" type="date"/>
</div>
</div>
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="textarea-modification" placeholder="Décrivez la modification du permis..." rows="3"></textarea>
<div className="flex items-center justify-end">
<button className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" onclick="toggleAiHelper('modification')" title="Ouvrir les suggestions IA">
<svg className="lucide lucide-sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path className="" d="M5 3v4"></path><path className="" d="M19 17v4"></path><path className="" d="M3 5h4"></path><path className="" d="M17 19h4"></path></svg> Aide IA
      </button>
</div>
<div className="space-y-3 rounded-md border border-neutral-200 bg-neutral-50/60 p-3" id="ai-helper-modification">
<select className="w-full rounded-md border border-neutral-200 bg-white p-2 text-sm text-neutral-600 focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="ai-prompt-select-modification" onchange="applyAiPrompt('modification')">
<option disabled="" selected="" value="">Suggestions de prompts...</option>
<option value="Générer une description de la modification d'un permis.">Générer une description</option>
<option value="Vérifier et corriger l'orthographe et la grammaire.">Vérifier l'orthographe</option>
</select>
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="ai-prompt-input-modification" placeholder="Décrivez ce que vous voulez que l'IA fasse..." rows="2"></textarea>
<div className="flex items-center justify-between">
<button className="hidden inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" id="ai-regenerate-btn-modification" onclick="generateAiContent('modification')">
<svg className="lucide lucide-refresh-cw" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path className="" d="M21 3v5h-5"></path><path className="" d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path className="" d="M3 21v-5h5"></path></svg> Régénérer
        </button>
<div className="flex items-center gap-2 ml-auto">
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" onclick="saveToLibrary('modification')">
<svg className="lucide lucide-library" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="m16 6 4 14"></path><path className="" d="M12 6v14"></path><path className="" d="M8 8v12"></path><path className="" d="M4 4v16"></path></svg> Enregistrer
          </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-transparent bg-[#649DAD] px-3 py-2 text-sm font-medium text-white hover:bg-opacity-90 transition-colors" onclick="generateAiContent('modification')">Générer</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="border rounded-lg border-neutral-200 bg-white overflow-hidden">
<label className="flex items-center justify-between gap-3 cursor-pointer hover:bg-neutral-50/50 transition-colors pt-4 pr-4 pb-4 pl-4" htmlFor="particularite-servitudes">
<div className="flex items-center gap-3">
<div className="relative flex-shrink-0">
<input className="sr-only peer" id="particularite-servitudes" onchange="toggleSection('servitudes')" type="checkbox"/>
<div className="w-5 h-5 peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20 transition-all duration-200 flex bg-white border-neutral-300 border-2 rounded items-center justify-center">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
<span className="text-sm font-medium text-neutral-700">Servitudes et autres droits</span>
</div>
<button aria-label="Déplier" className="p-1 hover:bg-neutral-100 rounded-full transition-colors" onclick="toggleExpand('servitudes', event)" type="button">
<svg className="w-4 h-4 text-neutral-500 transition-transform duration-200" fill="none" id="chevron-servitudes" stroke="currentColor" style={{transform: 'rotate(180deg)'}} viewbox="0 0 24 24">
<path className="" d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</label>
<div className="overflow-hidden" id="content-servitudes" style={{height: 'auto'}}>
<div className="border-t border-neutral-200 px-4 pt-3 pb-4">
<div className="text-sm text-neutral-600 mb-3 p-3 bg-neutral-50 rounded-md border border-neutral-200">Si le projet a pour effet d'éteindre ou de modifier des servitudes et autres droits, précisez-en la nature (servitude de passage, de vue, etc.) et les contraintes induites par le projet :</div>
<div className="space-y-2">
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="textarea-servitudes" placeholder="Décrivez les servitudes concernées..." rows="3"></textarea>
<div className="flex items-center justify-end">
<button className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" onclick="toggleAiHelper('servitudes')" title="Ouvrir les suggestions IA">
<svg className="lucide lucide-sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path className="" d="M5 3v4"></path><path className="" d="M19 17v4"></path><path className="" d="M3 5h4"></path><path className="" d="M17 19h4"></path></svg> Aide IA
                </button>
</div>
<div className="hidden space-y-3 rounded-md border border-neutral-200 bg-neutral-50/60 p-3" id="ai-helper-servitudes">
<select className="w-full rounded-md border border-neutral-200 bg-white p-2 text-sm text-neutral-600 focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="ai-prompt-select-servitudes" onchange="applyAiPrompt('servitudes')">
<option disabled="" selected="" value="">Suggestions de prompts...</option>
<option value="Générer une description d'une servitude de passage.">Générer une description</option>
<option value="Vérifier et corriger l'orthographe et la grammaire.">Vérifier l'orthographe</option>
</select>
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="ai-prompt-input-servitudes" placeholder="Décrivez ce que vous voulez que l'IA fasse..." rows="2"></textarea>
<div className="flex items-center justify-between">
<button className="hidden inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" id="ai-regenerate-btn-servitudes" onclick="generateAiContent('servitudes')">
<svg className="lucide lucide-refresh-cw" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path className="" d="M21 3v5h-5"></path><path className="" d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path className="" d="M3 21v-5h5"></path></svg> Régénérer
                  </button>
<div className="flex items-center gap-2 ml-auto">
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" onclick="saveToLibrary('servitudes')">
<svg className="lucide lucide-library" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="m16 6 4 14"></path><path className="" d="M12 6v14"></path><path className="" d="M8 8v12"></path><path className="" d="M4 4v16"></path></svg> Enregistrer
                    </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-transparent bg-[#649DAD] px-3 py-2 text-sm font-medium text-white hover:bg-opacity-90 transition-colors" onclick="generateAiContent('servitudes')">Générer</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex gap-2 pt-6 items-center justify-end">
<button className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm bg-neutral-900 text-white hover:bg-neutral-800" id="btnC2Valider">
<svg className="lucide lucide-check-circle-2 w-4 h-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Valider le cadre
    </button>
</div></div>
</div>
</details>

<details className="group rounded-lg border open:shadow-sm border-neutral-200 bg-white" id="cadre-4" open="">
<summary className="cursor-pointer select-none">
<div className="flex pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900">Cadre 4 — Parti architectural</div>
</div>
<svg className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</div>

</summary>
<div className="border-t border-neutral-200">
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4 space-y-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="">
<label className="text-[13px] text-neutral-500" htmlFor="textarea-description">Options d’aménagement et parti architectural du projet</label>
<div className="text-[12px] text-neutral-600 mt-1 mb-2">Présenter le projet dans ses paramètres essentiels et significatifs : le choix d’une implantation, d’une composition architecturale, d’un gabarit, de matériaux, l’aménagement de ses abords et son équipement, l’habitabilité, etc. en rapport avec un contexte urbanistique identifié et au regard des contraintes légales et réglementaires qui pèsent sur le bien.</div>
<div className="space-y-2">
<textarea className="w-full focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors text-sm bg-white border-neutral-200 border rounded-md pt-2.5 pr-2.5 pb-2.5 pl-2.5" id="textarea-description" placeholder="Description détaillée du projet..." rows="10"></textarea>
<div className="flex items-center justify-end">
<button className="inline-flex gap-1.5 hover:bg-neutral-100 transition-colors text-sm text-neutral-600 rounded-md pt-2 pr-3 pb-2 pl-3 items-center" onclick="toggleAiHelper('description')" title="Ouvrir les suggestions IA">
<svg className="lucide lucide-sparkles w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
<path d="M5 3v4"></path>
<path d="M19 17v4"></path>
<path d="M3 5h4"></path>
<path d="M17 19h4"></path>
</svg>
            Aide IA
          </button>
</div>
<div className="space-y-3 rounded-md border border-neutral-200 bg-neutral-50/60 p-3 hidden" id="ai-helper-description" style={{maxHeight: '0px', opacity: '0', transition: 'max-height 0.3s ease-out, opacity 0.3s ease-out'}}>
<select className="w-full rounded-md border border-neutral-200 bg-white p-2 text-sm text-neutral-600 focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="ai-prompt-select-description" onchange="applyAiPrompt('description')">
<option disabled="" selected="" value="">Suggestions de prompts...</option>
<option value="Générer une première version de la description du projet.">Générer une première version</option>
<option value="Lister les contraintes potentielles liées au projet.">Lister les contraintes</option>
<option value="Simplifier la rédaction de la description actuelle.">Simplifier la rédaction</option>
<option value="Vérifier et corriger l'orthographe et la grammaire.">Vérifier l’orthographe</option>
</select>
<textarea className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" id="ai-prompt-input-description" placeholder="Décrivez ce que vous voulez que l’IA fasse..." rows="2"></textarea>
<div className="flex items-center justify-between">
<button className="hidden inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" id="ai-regenerate-btn-description" onclick="generateAiContent('description')">
<svg className="lucide lucide-refresh-cw" fill="none" height="16" round"="" stroke="currentColor" strokeLinecap="round strokeLinejoin=" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5"></path>
<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
<path d="M3 21v-5h5"></path>
</svg>
              Régénérer
            </button>
<div className="flex items-center gap-2 ml-auto">
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 transition-colors" onclick="saveToLibrary('description')">
<svg className="lucide lucide-library" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m16 6 4 14"></path>
<path d="M12 6v14"></path>
<path d="M8 8v12"></path>
<path d="M4 4v16"></path>
</svg>
                Enregistrer
              </button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-transparent bg-[#649DAD] px-3 py-2 text-sm font-medium text-white hover:bg-opacity-90 transition-colors" onclick="generateAiContent('description')">
                Générer
              </button>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col bg-white border-neutral-200 border rounded-lg">

<div className="flex gap-2 border-neutral-200 border-b pt-2 pr-3 pb-2 pl-3 items-center justify-between" id="aura-emf0xg67w">
<div className="min-w-0">
<div className="truncate text-sm font-medium text-neutral-900 tracking-tight" id="map-title">Plan cadastral rayon de 50m</div>
<div className="mt-1 flex items-center gap-2 flex-wrap">
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-[11px] text-neutral-700" title="Index de la carte">
<svg className="w-3 h-3 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="7" width="7" x="3" y="3"></rect><rect height="7" width="7" x="14" y="3"></rect><rect height="7" width="7" x="14" y="14"></rect><rect height="7" width="7" x="3" y="14"></rect></svg>
<span id="map-index">1/17</span>
</span>
<div aria-hidden="true" className="relative h-1.5 w-24 sm:w-40 rounded-full bg-neutral-100 overflow-hidden">
<div className="h-1.5 bg-neutral-900" id="map-progress" style={{width: '6%'}}></div>
</div>
<span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-neutral-500">
<svg className="w-3.5 h-3.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="M6 8h.01"></path><path d="M10 8h.01"></path><path d="M14 8h.01"></path><path d="M18 8h.01"></path></svg>
        ← → pour naviguer
      </span>
<span aria-live="polite" className="sr-only" id="map-index-sr">Carte 1 sur 17</span>
</div>

<div className="mt-1 text-[12px] text-neutral-600" id="map-legend">
<div className="bg-neutral-50/60 border-neutral-200 border rounded-md p-2">
<div className="space-y-2" id="map-legend-content"><div className="text-[12px] font-medium text-neutral-800 tracking-tight">Plan cadastral rayon de 50m</div></div>
</div>
</div>
</div>
<div className="flex gap-1 items-center">

<button className="inline-flex items-center justify-center rounded-md border px-2 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" id="map-prev" title="Précédent" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg>
</button>

<button className="inline-flex items-center justify-center rounded-md border px-2 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" id="map-next" title="Suivant" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
</button>
<div className="h-5 w-px bg-neutral-200 mx-1"></div>

<button className="group inline-flex items-center justify-center rounded-md border px-2.5 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" id="map-copy-ui" title="Copier le titre et la légende" type="button">
<svg className="w-3.5 h-3.5 transition-opacity" data-icon="" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="8" x="8" y="2"></rect><path d="M16 4v12a2 2 0 0 1-2 2H6"></path><rect height="12" rx="2" width="8" x="2" y="6"></rect></svg>
<svg className="w-3.5 h-3.5 text-[#10B981] hidden" data-check="" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</button>

<button aria-hidden="true" className="sr-only pointer-events-none" id="map-copy" tabindex="-1" type="button">Copier</button>

</div>
</div>

<div aria-label="Visualisateur de cartes" className="relative flex items-center justify-center bg-neutral-50" id="map-viewer" role="region" tabindex="0">
<img alt="Carte: Plan cadastral rayon de 50m" className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-contain select-none" draggable="false" id="map-image" src="https://cdn.cmsfly.com/6842ec14af46480011651e99/images/Plancadastralrayonde50m-F7L2P.jpg"/>

<div className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-2 sm:hidden">
<button className="inline-flex items-center justify-center rounded-full bg-white/90 border border-neutral-200 shadow-sm p-2 text-neutral-700" id="map-prev-sm" type="button">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg>
</button>
<button className="inline-flex items-center justify-center rounded-full bg-white/90 border border-neutral-200 shadow-sm p-2 text-neutral-700" id="map-next-sm" type="button">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
</button>
</div>
</div>


</div>
</div>


</div>
</div>
</details>

<details className="group rounded-lg border open:shadow-sm border-neutral-200 bg-white" id="cadre-5" open="">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900">Cadre 5 — Dérogations / Écarts</div>
<svg className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</div>

</summary>
<div className="border-t border-neutral-200">
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4 space-y-4">

<div className="rounded-md border border-neutral-200 bg-neutral-50/60 p-3">
<div className="flex items-start justify-between gap-3">
<div className="flex items-start gap-2 text-[13px] text-neutral-700">
<svg className="w-4 h-4 mt-0.5 text-neutral-600" fillnone"="" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path className="" d="M12 16v-4"></path><path className="" d="M12 8h.01"></path></svg>
<p className="">La réglementation applicable est reprise dans la Grille analytique (Annexe). Lisez-la avant de compléter les justifications.</p>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" href="#annexe-grille">
          Voir l’annexe
        </a>
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" id="btnOpenGuide" title="Ouvrir le guide des articles" type="button">
          Ouvrir le guide des articles (D.IV.5, D.IV.6–D.IV.11, D.IV.13)
        </button>
</div>
</div>
</div>

<div className="space-y-2">

<div className="border rounded-lg border-neutral-200 bg-white overflow-hidden">
<label aria-controls="content-derog" aria-expanded="true" className="flex items-center justify-between gap-3 cursor-pointer hover:bg-neutral-50/50 transition-colors pt-3 pr-4 pb-3 pl-4" htmlFor="chk-derog" id="toggle-derog">
<div className="flex items-center gap-3">
<div className="relative flex-shrink-0">
<input className="sr-only" id="chk-derog" type="checkbox"/>
<div aria-hidden="true" className="w-5 h-5 transition-all duration-200 flex bg-white border-2 rounded items-center justify-center bg-[#649DAD] border-[#649DAD]" id="chk-derog-ui">
<svg className="transition-opacity opacity-100 w-[12px] h-[12px]" data-icon-replaced="true" fill="currentColor" id="chk-derog-icon" strokeWidth="2" style={{width: '12px', height: '12px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 4 9.293L8 13.293l7.293-7.293a1 1 0 0 1 1.414 0z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
<span className="text-sm font-medium text-neutral-700">Dérogation au plan de secteur / normes du guide régional</span>
</div>
<button aria-label="Déplier la section Dérogations" className="p-1 rounded-full hover:bg-neutral-100 transition-colors" id="btn-derog-chevron" type="button">
<svg className="w-4 h-4 text-neutral-500 transition-transform duration-200" fill="none" id="chev-derog" stroke="currentColor" strokeWidth="2" style={{transform: 'rotate(180deg)'}} viewbox="0 0 24 24"><path className="" d="m6 9 6 6 6-6"></path></svg>
</button>
</label>
<div className="overflow-hidden" id="content-derog">
<div className="border-t border-neutral-200 px-4 pt-3 pb-4 space-y-3">
<div className="text-[13px] text-neutral-600 rounded-md border border-neutral-200 bg-neutral-50 p-3">
            « Lisez attentivement la grille et, le cas échéant, complétez les éléments ci-dessous uniquement si une dérogation est sollicitée. »
          </div>
<div className="space-y-3">
<div className="space-y-2">
<label className="text-[13px] text-neutral-500">Énumérer la ou les dérogations sollicitées</label>
<textarea className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" placeholder="« Exemple : dépassement du gabarit R+1 ou affectation en zone d’habitat »" rows="3"></textarea>
</div>
<div className="space-y-2">
<label className="text-[13px] text-neutral-500">Motiver le respect des conditions (articles D.IV.6 à D.IV.11)</label>
<textarea className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" placeholder="« Décrivez pourquoi le projet répond à l’une des hypothèses de dérogation prévues par le CoDT… »" rows="3"></textarea>
</div>
<div className="space-y-2">
<label className="text-[13px] text-neutral-500">Motiver le respect de l’article D.IV.13</label>
<textarea className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" placeholder="« Expliquez en quoi le projet respecte les conditions de l’article D.IV.13 (cohérence urbanistique, insertion paysagère, etc.) »" rows="4"></textarea>
</div>
<button className="flex ml-auto gap-1.5 hover:bg-neutral-100 transition-colors text-sm text-neutral-600 rounded-md pt-2 pr-3 pb-2 pl-3 items-center" onclick="toggleAiHelper('description')" title="Ouvrir les suggestions IA">
<svg className="lucide lucide-sparkles w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(82, 82, 82)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
<path className="" d="M5 3v4"></path>
<path className="" d="M19 17v4"></path>
<path className="" d="M3 5h4"></path>
<path className="" d="M17 19h4"></path>
</svg>
          Aide IA
        </button>
</div>
</div>
</div>
</div>

<div className="border rounded-lg border-neutral-200 bg-white overflow-hidden">
<label aria-controls="content-ecart" aria-expanded="true" className="flex items-center justify-between gap-3 cursor-pointer hover:bg-neutral-50/50 transition-colors pt-3 pr-4 pb-3 pl-4" htmlFor="chk-ecart" id="toggle-ecart">
<div className="flex items-center gap-3">
<div className="relative flex-shrink-0">
<input className="sr-only" id="chk-ecart" type="checkbox"/>
<div aria-hidden="true" className="w-5 h-5 transition-all duration-200 flex bg-white border-2 rounded items-center justify-center bg-[#649DAD] border-[#649DAD]" id="chk-ecart-ui">
<svg className="w-3 h-3 text-white transition-opacity opacity-100" fill="currentColor" id="chk-ecart-icon" viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 4 9.293L8 13.293l7.293-7.293a1 1 0 0 1 1.414 0z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
<span className="text-sm font-medium text-neutral-700">Écart à un schéma / carte d’affectation / guide / permis d’urbanisation</span>
</div>
<button aria-label="Déplier la section Écarts" className="p-1 rounded-full hover:bg-neutral-100 transition-colors" id="btn-ecart-chevron" type="button">
<svg className="w-4 h-4 text-neutral-500 transition-transform duration-200" fill="none" id="chev-ecart" stroke="currentColor" strokeWidth="2" style={{transform: 'rotate(180deg)'}} viewbox="0 0 24 24"><path className="" d="m6 9 6 6 6-6"></path></svg>
</button>
</label>
<div className="overflow-hidden" id="content-ecart">
<div className="border-t border-neutral-200 px-4 pt-3 pb-4 space-y-3">
<div className="text-[13px] text-neutral-600 rounded-md border border-neutral-200 bg-neutral-50 p-3">
            « Lisez attentivement la grille et, le cas échéant, complétez les éléments ci-dessous uniquement si un ou plusieurs écarts sont sollicités. »
          </div>
<div className="space-y-3">
<div className="space-y-2">
<label className="text-[13px] text-neutral-500">Énumérer le ou les écarts sollicités</label>
<textarea className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" placeholder="« Exemple : recul de façade différent du schéma communal, alignement non conforme au guide… »" rows="3"></textarea>
</div>
<div className="space-y-2">
<label className="text-[13px] text-neutral-500">Motiver le respect de l’article D.IV.5</label>
<textarea className="mt-1 w-full rounded-md border p-2.5 text border-neutral-200 bg-white focus:border-[#649DAD] focus:ring-1 focus:ring-[#649DAD]/50 transition-colors" placeholder="« Justifiez en quoi l’écart reste compatible avec les objectifs fixés par l’article D.IV.5 »" rows="3"></textarea>
</div>
<div className="flex items-start justify-between gap-2 flex-wrap">
<div className="inline-flex items-center gap-1.5 text-[12px] text-neutral-600">
<svg className="w-3.5 h-3.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M4 19.5V4.6a2 2 0 0 1 2-2h8.6a2 2 0 0 1 2 2v.9"></path><path className="" d="M8 2.6v4a2 2 0 0 0 2 2h4.6"></path><path className="" d="M16 22H6a2 2 0 0 1-2-2v-1h14v1a2 2 0 0 1-2 2Z"></path></svg>
<span>Article applicable → <span className="font-medium text-neutral-700">D.IV.5</span></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-md border border-neutral-200 bg-neutral-50/60 p-3">
<div className="flex items-center justify-between gap-3 flex-wrap">
<div className="flex items-center gap-2 flex-wrap">
<span className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium border-neutral-200 bg-white text-neutral-700" id="sum-derog-badge">Dérogations: ⚠️</span>
<span className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium border-neutral-200 bg-white text-neutral-700" id="sum-ecart-badge">Écarts: ⚠️</span>
</div>
<div className="text-[12px] text-neutral-600">Assurez-vous que vos justifications répondent aux conditions légales du CoDT.</div>
</div>
</div>

</div>
</div>
</details>

<details className="group rounded-lg border open:shadow-sm border-neutral-200 bg-white" id="cadre-6" open="">
<summary className="cursor-pointer select-none">
<div className="flex pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="text-sm font-semibold tracking-tight text-neutral-900">Cadre 6 — Documents à joindre</div>
<svg className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4 space-y-4">


<div className="space-y-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900">Documents obligatoires pour toute demande</div>

<div className="doc-row bg-white border-neutral-200 border rounded-md pt-3 pr-3 pb-3 pl-3" data-attached="true" data-copies="4" data-type="included">
<div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,240px] gap-3 items-start">
<div className="flex items-start gap-3">
<div className="relative flex-shrink-0 mt-0.5">
<input checked="" className="sr-only peer" id="doc-formulaire" type="checkbox"/>
<div className="w-5 h-5 border-2 border-[#649DAD] bg-[#649DAD] rounded flex items-center justify-center transition-all peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 20 20"><path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 12.414a1 1 0 111.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
</div>
</div>
<div className="flex flex-col">
<label className="cursor-pointer text-sm font-medium text-neutral-900" htmlFor="doc-formulaire">Le présent formulaire de demande de permis</label>
<div className="mt-1 inline-flex items-center gap-1 text-[12px] text-neutral-600">
<span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] border-[#649DAD]/30 bg-[#649DAD]/10 text-[#649DAD]">✔ Pré-coché</span>
</div>
</div>
</div>
<div className="text-[13px] text-neutral-600">Précise les types d’actes et travaux envisagés. Signé par le demandeur et, sauf dispense, par un architecte.</div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="text-[12px] text-neutral-600">4 exemplaires</div>
<div className="inline-flex items-center gap-1.5 text-[12px] text-[#10B981]">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path className="" d="m9 11 3 3L22 4"></path></svg>
            Inclus
          </div>
</div>
</div>
</div>

<div className="doc-row rounded-md border border-neutral-200 bg-white p-3" data-attached="false" data-copies="4" data-type="create">
<div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,240px] gap-3 items-start">
<div className="flex items-start gap-3">
<div className="relative flex-shrink-0 mt-0.5">
<input className="sr-only peer" id="doc-photos" type="checkbox"/>
<div className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center transition-all peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20"><path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 12.414a1 1 0 111.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
</div>
</div>
<label className="cursor-pointer text-sm font-medium text-neutral-900" htmlFor="doc-photos">Un reportage photographique</label>
</div>
<div className="text-[13px] text-neutral-600">Photos en couleurs : 2 vues front de voirie + vis-à-vis, 3 vues limites/parcelles, 3 vues éloignées avec indication de l’implantation.</div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="text-[12px] text-neutral-600">4 exemplaires</div>
<div className="text-[12px] text-neutral-500" data-status=""></div>
<div className="flex items-center gap-2">
<button className="inline-flex gap-1.5 hover:bg-neutral-50 text-xs text-neutral-700 bg-white border-neutral-200 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 items-center" data-action="create" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 5v14"></path><path className="" d="M5 12h14"></path></svg>
              Créer
            </button>
<button className="hidden inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" data-action="clear" type="button">Supprimer</button>
</div>
</div>
</div>
</div>

<div className="doc-row rounded-md border border-neutral-200 bg-white p-3" data-attached="false" data-copies="4" data-type="upload">
<div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,240px] gap-3 items-start">
<div className="flex items-start gap-3">
<div className="relative flex-shrink-0 mt-0.5">
<input className="sr-only peer" id="doc-plans" type="checkbox"/>
<div className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center transition-all peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20"><path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 12.414a1 1 0 111.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
</div>
</div>
<label className="cursor-pointer text-sm font-medium text-neutral-900" htmlFor="doc-plans">Les plans (voir cadre 7)</label>
</div>
<div className="text-[13px] text-neutral-600">Plans requis selon le type d’actes et travaux.</div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="text-[12px] text-neutral-600">4 exemplaires</div>
<div className="text-[12px] text-neutral-500" data-status=""></div>
<div className="flex items-center gap-2">
<input className="hidden" data-file="" type="file"/>
<button className="inline-flex gap-1.5 hover:bg-neutral-50 text-xs text-neutral-700 bg-white border-neutral-200 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 items-center" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 15V3"></path></svg>
              Uploader
            </button>
<button className="hidden inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" data-action="clear" type="button">Supprimer</button>
</div>
</div>
</div>
</div>

<div className="doc-row rounded-md border border-neutral-200 bg-white p-3" data-attached="false" data-copies="4" data-type="create">
<div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,240px] gap-3 items-start">
<div className="flex items-start gap-3">
<div className="relative flex-shrink-0 mt-0.5">
<input className="sr-only peer" id="doc-incidences" type="checkbox"/>
<div className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center transition-all peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20"><path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 12.414a1 1 0 111.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
</div>
</div>
<label className="cursor-pointer text-sm font-medium text-neutral-900" htmlFor="doc-incidences">Une notice d’évaluation des incidences / étude d’incidences</label>
</div>
<div className="text-[13px] text-neutral-600">Document requis par le Code de l’environnement.</div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="text-[12px] text-neutral-600">4 exemplaires</div>
<div className="text-[12px] text-neutral-500" data-status=""></div>
<div className="flex items-center gap-2">
<button className="inline-flex gap-1.5 hover:bg-neutral-50 text-xs text-neutral-700 bg-white border-neutral-200 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 items-center" data-action="create" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 5v14"></path><path className="" d="M5 12h14"></path></svg>
              Créer
            </button>
<button className="hidden inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" data-action="clear" type="button">Supprimer</button>
</div>
</div>
</div>
</div>

<div className="doc-row rounded-md border border-neutral-200 bg-white p-3" data-attached="false" data-copies="3" data-type="create">
<div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,240px] gap-3 items-start">
<div className="flex items-start gap-3">
<div className="relative flex-shrink-0 mt-0.5">
<input className="sr-only peer" id="doc-sols" type="checkbox"/>
<div className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center transition-all peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20"><path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 12.414a1 1 0 111.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
</div>
</div>
<label className="cursor-pointer text-sm font-medium text-neutral-900" htmlFor="doc-sols">Formulaire « Décret SOLS »</label>
</div>
<div className="text-[13px] text-neutral-600">Vérifier les données dans la BDES. Joindre formulaire et annexes si requis.</div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="text-[12px] text-neutral-600">3 exemplaires</div>
<div className="text-[12px] text-neutral-500" data-status=""></div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" data-action="create" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 5v14"></path><path className="" d="M5 12h14"></path></svg>
              Créer
            </button>
<button className="hidden inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" data-action="clear" type="button">Supprimer</button>
</div>
</div>
</div>
</div>

<div className="doc-row bg-white border-neutral-200 border rounded-md pt-3 pr-3 pb-3 pl-3" data-attached="false" data-copies="2" data-type="upload">
<div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,240px] gap-3 items-start">
<div className="flex items-start gap-3">
<div className="relative flex-shrink-0 mt-0.5">
<input className="sr-only peer" id="doc-peb" type="checkbox"/>
<div className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center transition-all peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20"><path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 12.414a1 1 0 111.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
</div>
</div>
<label className="cursor-pointer text-sm font-medium text-neutral-900" htmlFor="doc-peb">Formulaire PEB</label>
</div>
<div className="text-[13px] text-neutral-600">Si applicable. Mentionner la référence du dossier PEB.</div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="text-[12px] text-neutral-600">2 exemplaires</div>
<div className="text-[12px] text-neutral-500" data-status=""></div>
<div className="flex items-center gap-2">
<input className="hidden" data-file="" type="file"/>
<button className="inline-flex gap-1.5 hover:bg-neutral-50 text-xs text-neutral-700 bg-white border-neutral-200 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 items-center" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 15V3"></path></svg>
              Uploader
            </button>
<button className="hidden inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" data-action="clear" type="button">Supprimer</button>
</div>
</div>
</div>
</div>

<div className="doc-row bg-white border-neutral-200 border rounded-md pt-3 pr-3 pb-3 pl-3" data-attached="false" data-copies="2" data-type="create">
<div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,240px] gap-3 items-start">
<div className="flex items-start gap-3">
<div className="relative flex-shrink-0 mt-0.5">
<input className="sr-only peer" id="doc-statbel" type="checkbox"/>
<div className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center transition-all peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20"><path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 12.414a1 1 0 111.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
</div>
</div>
<label className="cursor-pointer text-sm font-medium text-neutral-900" htmlFor="doc-statbel">Formulaire statistique SPF Économie (Statbel)</label>
</div>
<div className="text-[13px] text-neutral-600">Modèle I (habitation) ou Modèle II (autres). Pas requis si pas de bâtiment.</div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="text-[12px] text-neutral-600">2 exemplaires</div>
<div className="text-[12px] text-neutral-500" data-status=""></div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" data-action="create" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 5v14"></path><path className="" d="M5 12h14"></path></svg>
              Créer
            </button>
<button className="hidden inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" data-action="clear" type="button">Supprimer</button>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900">Documents spécifiques (Code wallon du Patrimoine)</div>
<div className="doc-row bg-white border-neutral-200 border rounded-md pt-3 pr-3 pb-3 pl-3" data-attached="false" data-copies="2" data-type="upload">
<div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,240px] gap-3 items-start">
<div className="flex items-start gap-3">
<div className="relative flex-shrink-0 mt-0.5">
<input className="sr-only peer" id="doc-peb" type="checkbox"/>
<div className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center transition-all peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20"><path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 12.414a1 1 0 111.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
</div>
</div>
<label className="cursor-pointer text-sm font-medium text-neutral-900" htmlFor="doc-peb">Autorisation patrimoniale valide</label>
</div>
<div className="text-[13px] text-neutral-600">Si le projet porte sur un bien classé ou assimilé (liste de sauvegarde, effets du classement) Référence : </div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="text-[12px] text-neutral-500" data-status=""></div>
<div className="flex items-center gap-2">
<input className="hidden" data-file="" type="file"/>
<button className="hidden inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" data-action="clear" type="button">Supprimer</button>
</div>
</div>
</div>
</div><div className="doc-row bg-white border-neutral-200 border rounded-md pt-3 pr-3 pb-3 pl-3" data-attached="false" data-copies="2" data-type="upload">
<div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,240px] gap-3 items-start">
<div className="flex items-start gap-3">
<div className="relative flex-shrink-0 mt-0.5">
<input className="sr-only peer" id="doc-peb" type="checkbox"/>
<div className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center transition-all peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20"><path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 12.414a1 1 0 111.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
</div>
</div>
<label className="cursor-pointer text-sm font-medium text-neutral-900" htmlFor="doc-peb">Avis archéologique préalable</label>
</div>
<div className="text-[13px] text-neutral-600">Pour projet ≥ 1 hectare (Code wallon du Patrimoine). Joindre avis ou preuve de demande</div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="text-[12px] text-neutral-600">2 exemplaires</div>
<div className="text-[12px] text-neutral-500" data-status=""></div>
<div className="flex items-center gap-2">
<input className="hidden" data-file="" type="file"/>
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 15V3"></path></svg>
              Uploader
            </button>
<button className="hidden inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" data-action="clear" type="button">Supprimer</button>
</div>
</div>
</div>
</div></div><div className="space-y-3">
<div className="text-sm font-semibold text-neutral-900 tracking-tight">Documents spécifiques requis par la législation relative à la conservation de la nature (si d’application)</div>


<div className="doc-row rounded-md border border-neutral-200 bg-white p-3" data-attached="false" data-copies="4" data-type="create">
<div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,240px] gap-3 items-start">
<div className="flex items-start gap-3">
<div className="relative flex-shrink-0 mt-0.5">
<input className="sr-only peer" id="doc-photos" type="checkbox"/>
<div className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center transition-all peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20"><path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 12.414a1 1 0 111.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
</div>
</div>
<label className="cursor-pointer text-sm font-medium text-neutral-900" htmlFor="doc-photos">Évaluation appropriée des incidences</label>
</div>
<div className="text-[13px] text-neutral-600">Si le projet impacte des espèces protégées ou un site Natura 2000</div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="text-[12px] text-neutral-600">3 exemplaires</div>
<div className="text-[12px] text-neutral-500" data-status=""></div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" data-action="create" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m5 7 5-5 5 5"></path><path className="" d="M12 2v20"></path><path className="" d="M5 17l5 5 5-5"></path></svg>
              Créer
            </button>
<button className="hidden inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" data-action="clear" type="button">Supprimer</button>
</div>
</div>
</div>
</div>

<div className="doc-row rounded-md border border-neutral-200 bg-white p-3" data-attached="false" data-copies="4" data-type="upload">
<div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,240px] gap-3 items-start">
<div className="flex items-start gap-3">
<div className="relative flex-shrink-0 mt-0.5">
<input className="sr-only peer" id="doc-plans" type="checkbox"/>
<div className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center transition-all peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20"><path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 12.414a1 1 0 111.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
</div>
</div>
<label className="cursor-pointer text-sm font-medium text-neutral-900" htmlFor="doc-plans">Demande de dérogation aux mesures de protection de la nature</label>
</div>
<div className="text-[13px] text-neutral-600">Si atteinte possible à des espèces protégées ou habitats. À obtenir auprès du DNF (SPW). Doit être délivrée avant l’autorisation du permis</div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="text-[12px] text-neutral-600">3 exemplaires</div>
<div className="text-[12px] text-neutral-500" data-status=""></div>
<div className="flex items-center gap-2">
<input className="hidden" data-file="" type="file"/>
<button className="inline-flex gap-1.5 hover:bg-neutral-50 text-xs text-neutral-700 bg-white border-neutral-200 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 items-center" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 V3"></path></svg>
              Uploader
            </button>
<button className="hidden inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" data-action="clear" type="button">Supprimer</button>
</div>
</div>
</div>
</div>




</div><div className="space-y-3">
<div className="text-sm font-semibold text-neutral-900 tracking-tight">Documents spécifiques relatifs à la voirie communale ou régionale (si d’application)</div>


<div className="doc-row rounded-md border border-neutral-200 bg-white p-3" data-attached="false" data-copies="4" data-type="create">
<div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,240px] gap-3 items-start">
<div className="flex items-start gap-3">
<div className="relative flex-shrink-0 mt-0.5">
<input className="sr-only peer" id="doc-photos" type="checkbox"/>
<div className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center transition-all peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20"><path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 12.414a1 1 0 111.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
</div>
</div>
<label className="cursor-pointer text-sm font-medium text-neutral-900" htmlFor="doc-photos">Dossier voirie (communale/régionale)</label>
</div>
<div className="text-[13px] text-neutral-600">Si création, modification ou suppression de voirie(s) communale(s)</div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="text-[12px] text-neutral-600">4 exemplaires</div>
<div className="text-[12px] text-neutral-500" data-status=""></div>
<div className="flex items-center gap-2">
<button className="inline-flex gap-1.5 hover:bg-neutral-50 text-xs text-neutral-700 bg-white border-neutral-200 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 items-center" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 V3"></path></svg>
              Uploader
            </button>
<button className="hidden inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" data-action="clear" type="button">Supprimer</button>
</div>
</div>
</div>
</div>

<div className="doc-row rounded-md border border-neutral-200 bg-white p-3" data-attached="false" data-copies="4" data-type="upload">
<div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,240px] gap-3 items-start">
<div className="flex items-start gap-3">
<div className="relative flex-shrink-0 mt-0.5">
<input className="sr-only peer" id="doc-plans" type="checkbox"/>
<div className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center transition-all peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20"><path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 12.414a1 1 0 111.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
</div>
</div>
<label className="cursor-pointer text-sm font-medium text-neutral-900" htmlFor="doc-plans">Note démontrant la qualité des aménagements cyclables</label>
</div>
<div className="text-[13px] text-neutral-600">Si projet de voirie régionale (réalisation, réfection, aménagement)</div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="text-[12px] text-neutral-600">3 exemplaires</div>
<div className="text-[12px] text-neutral-500" data-status=""></div>
<div className="flex items-center gap-2">
<input className="hidden" data-file="" type="file"/>
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 V3"></path></svg>
              Uploader
            </button>
<button className="hidden inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" data-action="clear" type="button">Supprimer</button>
</div>
</div>
</div>
</div>




</div><div className="space-y-3">
<div className="text-sm font-semibold text-neutral-900 tracking-tight">Documents spécifiques relatifs aux Risques Naturels (si d’application)</div>


<div className="doc-row rounded-md border border-neutral-200 bg-white p-3" data-attached="false" data-copies="4" data-type="create">
<div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,240px] gap-3 items-start">
<div className="flex items-start gap-3">
<div className="relative flex-shrink-0 mt-0.5">
<input className="sr-only peer" id="doc-photos" type="checkbox"/>
<div className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center transition-all peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20"><path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 12.414a1 1 0 111.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
</div>
</div>
<label className="cursor-pointer text-sm font-medium text-neutral-900" htmlFor="doc-photos">Document démontrant l’absence d’aggravation en zone inondable (faible ou moyenne)</label>
</div>
<div className="text-[13px] text-neutral-600">Joindre les pièces techniques (circulaire constructibilité en zone inondable)</div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="text-[12px] text-neutral-600">4 exemplaires</div>
<div className="text-[12px] text-neutral-500" data-status=""></div>
<div className="flex items-center gap-2">
<button className="inline-flex gap-1.5 hover:bg-neutral-50 text-xs text-neutral-700 bg-white border-neutral-200 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 items-center" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 V3"></path></svg>
              Uploader
            </button>
<button className="hidden inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" data-action="clear" type="button">Supprimer</button>
</div>
</div>
</div>
</div>

<div className="doc-row bg-white border-neutral-200 border rounded-md pt-3 pr-3 pb-3 pl-3" data-attached="false" data-copies="4" data-type="upload">
<div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,240px] gap-3 items-start">
<div className="flex items-start gap-3">
<div className="relative flex-shrink-0 mt-0.5">
<input className="sr-only peer" id="doc-plans" type="checkbox"/>
<div className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center transition-all peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20"><path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 12.414a1 1 0 111.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
</div>
</div>
<label className="cursor-pointer text-sm font-medium text-neutral-900" htmlFor="doc-plans">Document démontrant faisabilité en zone inondable élevée</label>
</div>
<div className="text-[13px] text-neutral-600">Doit prouver que le projet est faisable, n’aggrave pas la situation et limite la vulnérabilité. Joindre les éléments techniques du référentiel « constructions et aménagements en zone inondable »</div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="text-[12px] text-neutral-600">4 exemplaires</div>
<div className="text-[12px] text-neutral-500" data-status=""></div>
<div className="flex items-center gap-2">
<input className="hidden" data-file="" type="file"/>
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 V3"></path></svg>
              Uploader
            </button>
<button className="hidden inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" data-action="clear" type="button">Supprimer</button>
</div>
</div>
</div>
</div><div className="doc-row bg-white border-neutral-200 border rounded-md pt-3 pr-3 pb-3 pl-3" data-attached="false" data-copies="4" data-type="upload">
<div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,240px] gap-3 items-start">
<div className="flex items-start gap-3">
<div className="relative flex-shrink-0 mt-0.5">
<input className="sr-only peer" id="doc-plans" type="checkbox"/>
<div className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center transition-all peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20"><path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 12.414a1 1 0 111.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
</div>
</div>
<label className="cursor-pointer text-sm font-medium text-neutral-900" htmlFor="doc-plans">Document démontrant que le projet n’aggrave pas la situation en zone déjà inondée</label>
</div>
<div className="text-[13px] text-neutral-600"></div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="text-[12px] text-neutral-600">4 exemplaires</div>
<div className="text-[12px] text-neutral-500" data-status=""></div>
<div className="flex items-center gap-2">
<input className="hidden" data-file="" type="file"/>
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 V3"></path></svg>
              Uploader
            </button>
<button className="hidden inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" data-action="clear" type="button">Supprimer</button>
</div>
</div>
</div>
</div><div className="doc-row bg-white border-neutral-200 border rounded-md pt-3 pr-3 pb-3 pl-3" data-attached="false" data-copies="4" data-type="upload">
<div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,240px] gap-3 items-start">
<div className="flex gap-3 items-start">
<div className="relative flex-shrink-0 mt-0.5">
<input className="sr-only peer" id="doc-plans" type="checkbox"/>
<div className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center transition-all peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20"><path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 12.414a1 1 0 111.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
</div>
</div>
<label className="cursor-pointer text-sm font-medium text-neutral-900" htmlFor="doc-plans">Document démontrant absence d’obstacle aux servitudes d’écoulement</label>
</div>
<div className="text-[13px] text-neutral-600">Si site concerné par servitude d’écoulement. Doit inclure mesures de limitation de la vulnérabilité.</div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="text-[12px] text-neutral-600">4 exemplaires</div>
<div className="text-[12px] text-neutral-500" data-status=""></div>
<div className="flex items-center gap-2">
<input className="hidden" data-file="" type="file"/>
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 V3"></path></svg>
              Uploader
            </button>
<button className="hidden inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" data-action="clear" type="button">Supprimer</button>
</div>
</div>
</div>
</div><div className="doc-row bg-white border-neutral-200 border rounded-md pt-3 pr-3 pb-3 pl-3" data-attached="false" data-copies="4" data-type="upload">
<div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,240px] gap-3 items-start">
<div className="flex items-start gap-3">
<div className="relative flex-shrink-0 mt-0.5">
<input className="sr-only peer" id="doc-plans" type="checkbox"/>
<div className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center transition-all peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20"><path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 12.414a1 1 0 111.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
</div>
</div>
<label className="cursor-pointer text-sm font-medium text-neutral-900" htmlFor="doc-plans">Mesures en matière de lutte contre le radon</label>
</div>
<div className="text-[13px] text-neutral-600">Prévoir mesures techniques actives et passives (zones à risque définies par l’AFCN)</div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="text-[12px] text-neutral-600">2 exemplaires</div>
<div className="text-[12px] text-neutral-500" data-status=""></div>
<div className="flex items-center gap-2">
<input className="hidden" data-file="" type="file"/>
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 V3"></path></svg>
              Uploader
            </button>
<button className="hidden inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" data-action="clear" type="button">Supprimer</button>
</div>
</div>
</div>
</div>




</div><div className="space-y-3">
<div className="text-sm font-semibold text-neutral-900 tracking-tight">Documents spécifiques requis relatifs au Code de l’eau</div>


<div className="doc-row rounded-md border border-neutral-200 bg-white p-3" data-attached="false" data-copies="4" data-type="create">
<div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,240px] gap-3 items-start">
<div className="flex items-start gap-3">
<div className="relative flex-shrink-0 mt-0.5">
<input className="sr-only peer" id="doc-photos" type="checkbox"/>
<div className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center transition-all peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20"><path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 12.414a1 1 0 111.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
</div>
</div>
<label className="cursor-pointer text-sm font-medium text-neutral-900" htmlFor="doc-photos">Rapport technique d’infiltration</label>
</div>
<div className="text-[13px] text-neutral-600">Démontrer la capacité d’infiltration des eaux pluviales ou usées épurées (Code de l’Eau). Référentiel SPW-TLPE à respecter</div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="text-[12px] text-neutral-600">4 exemplaires</div>
<div className="text-[12px] text-neutral-500" data-status=""></div>
<div className="flex items-center gap-2">
<button className="inline-flex gap-1.5 hover:bg-neutral-50 text-xs text-neutral-700 bg-white border-neutral-200 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 items-center" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 V3"></path></svg>
              Uploader
            </button>
<button className="hidden inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" data-action="clear" type="button">Supprimer</button>
</div>
</div>
</div>
</div>





</div><div className="space-y-3">
<div className="text-sm font-semibold text-neutral-900 tracking-tight">Autres documents spécifiques (si d’application)</div>


<div className="doc-row rounded-md border border-neutral-200 bg-white p-3" data-attached="false" data-copies="4" data-type="create">
<div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,240px] gap-3 items-start">
<div className="flex items-start gap-3">
<div className="relative flex-shrink-0 mt-0.5">
<input className="sr-only peer" id="doc-photos" type="checkbox"/>
<div className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center transition-all peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20"><path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 12.414a1 1 0 111.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
</div>
</div>
<label className="cursor-pointer text-sm font-medium text-neutral-900" htmlFor="doc-photos">Procès-verbal de réunion de projet (art. D.IV.31 CoDT)</label>
</div>
<div className="text-[13px] text-neutral-600">Si une réunion de projet a eu lieu. PV non décisionnel</div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="text-[12px] text-neutral-600">2 exemplaires</div>
<div className="text-[12px] text-neutral-500" data-status=""></div>
<div className="flex items-center gap-2">
<button className="inline-flex gap-1.5 hover:bg-neutral-50 text-xs text-neutral-700 bg-white border-neutral-200 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 items-center" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 V3"></path></svg>
              Uploader
            </button>
<button className="hidden inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" data-action="clear" type="button">Supprimer</button>
</div>
</div>
</div>
</div>

<div className="doc-row bg-white border-neutral-200 border rounded-md pt-3 pr-3 pb-3 pl-3" data-attached="false" data-copies="4" data-type="upload">
<div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,240px] gap-3 items-start">
<div className="flex items-start gap-3">
<div className="relative flex-shrink-0 mt-0.5">
<input className="sr-only peer" id="doc-plans" type="checkbox"/>
<div className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center transition-all peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20"><path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 12.414a1 1 0 111.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
</div>
</div>
<label className="cursor-pointer text-sm font-medium text-neutral-900" htmlFor="doc-plans">Note de calcul relative à l’éclairage naturel</label>
</div>
<div className="text-[13px] text-neutral-600">Si création d’un ou plusieurs logements dans une construction existante</div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="text-[12px] text-neutral-600">2 exemplaires</div>
<div className="text-[12px] text-neutral-500" data-status=""></div>
<div className="flex items-center gap-2">
<input className="hidden" data-file="" type="file"/>
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 V3"></path></svg>
              Uploader
            </button>
<button className="hidden inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" data-action="clear" type="button">Supprimer</button>
</div>
</div>
</div>
</div><div className="doc-row bg-white border-neutral-200 border rounded-md pt-3 pr-3 pb-3 pl-3" data-attached="false" data-copies="4" data-type="upload">
<div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,240px] gap-3 items-start">
<div className="flex gap-3 items-start">
<div className="relative flex-shrink-0 mt-0.5">
<input className="sr-only peer" id="doc-plans" type="checkbox"/>
<div className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center transition-all peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20"><path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 12.414a1 1 0 111.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
</div>
</div>
<label className="cursor-pointer text-sm font-medium text-neutral-900" htmlFor="doc-plans">Formulaire acoustique</label>
</div>
<div className="text-[13px] text-neutral-600">Si soumis aux normes acoustiques (zones B, C, D – aéroports Liège-Bierset et Charleroi). Document RU/ACQ</div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="text-[12px] text-neutral-600">3 exemplaires</div>
<div className="text-[12px] text-neutral-500" data-status=""></div>
<div className="flex items-center gap-2">
<input className="hidden" data-file="" type="file"/>
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 V3"></path></svg>
              Uploader
            </button>
<button className="hidden inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" data-action="clear" type="button">Supprimer</button>
</div>
</div>
</div>
</div><div className="doc-row bg-white border-neutral-200 border rounded-md pt-3 pr-3 pb-3 pl-3" data-attached="false" data-copies="4" data-type="upload">
<div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,240px] gap-3 items-start">
<div className="flex items-start gap-3">
<div className="relative flex-shrink-0 mt-0.5">
<input className="sr-only peer" id="doc-plans" type="checkbox"/>
<div className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center transition-all peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20"><path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 12.414a1 1 0 111.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
</div>
</div>
<label className="cursor-pointer text-sm font-medium text-neutral-900" htmlFor="doc-plans">Étude d’opportunité préalable à extension réseau de gaz</label>
</div>
<div className="text-[13px] text-neutral-600">Si projet porte sur : - Constructions publiques collectives - Nouveaux parcs d’activités - Rénovation par quartiers ou logements publics - Travaux de voiries soumis à coordination</div>
<div className="flex flex-col items-start sm:items-end gap-1">
<div className="text-[12px] text-neutral-600">2 exemplaires</div>
<div className="text-[12px] text-neutral-500" data-status=""></div>
<div className="flex items-center gap-2">
<input className="hidden" data-file="" type="file"/>
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 V3"></path></svg>
              Uploader
            </button>
<button className="hidden inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" data-action="clear" type="button">Supprimer</button>
</div>
</div>
</div>
</div>




</div></div>
</div>
</details>

<details className="group rounded-lg border open:shadow-sm border-neutral-200 bg-white" id="cadre-7" open="">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900">Cadre 7 — Plans à fournir</div>
<svg className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4 space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

<div className="bg-white border-neutral-200 border rounded-md sm:col-span-2">
<div className="flex border-neutral-200 border-b pt-2 pr-3 pb-2 pl-3 items-center justify-between">
<div className="text-sm font-semibold tracking-tight text-neutral-900">Plans requis pour toute demande</div>
<div className="text-[12px] text-neutral-500">Cochez et joignez les plans</div>
</div>
<div className="overflow-x-auto pt-2 pr-2 pb-2 pl-2">
<table className="w-full border-collapse text-sm">
<thead className="text-neutral-700 bg-neutral-50">
<tr className="">
<th className="text-left px-3 py-2 text13px] font-medium">Plan</th>
<th className="text-left px-3 py-2 text-[13px] font-medium">Échelle</th>
<th className="text-[13px] font-medium text-left pt-2 pr-3 pb-2 pl-3">Caractéristiques minimales</th>
<th className="text-left px-3 py-2 text-[13px] font-medium">Exemplaires</th>
<th className="text-left px-3 py-2 text-[13px] font-medium">Action</th>
</tr>
</thead>
<tbody className="align-top" id="plans-required-rows">

<tr className="" data-row="" data-section="required">
<td className="px-3 py-2">
<label className="flex items-start gap-2 cursor-pointer">
<span className="relative mt-0.5">
<input checked="" className="sr-only peer" type="checkbox"/>
<span className="w-5 h-5 border-2 border-[#649DAD] bg-[#649DAD] rounded flex items-center justify-center peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-[12px] h-[12px]" data-icon-replaced="true" fill="currentColor" strokeWidth="2" style={{width: '12px', height: '12px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 4 9.293L8 13.293l7.293-7.293a1 1 0 0 1 1.414 0z" fill-rule="evenodd"></path>
</svg>
</span>
</span>
<span className="flex flex-col">
<span className="text-sm font-medium text-neutral-900">Plan de situation du bien</span>
<span className="mt-0.5 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] border-[#649DAD]/30 bg-[#649DAD]/10 text-[#649DAD]">Requis</span>
</span>
</label>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">1/10.000 ou 1/5.000</td>
<td className="px-3 py-2">
<ul className="text-[12px] text-neutral-600 list-disc pl-4 space-y-0.5">
<li>Orientation</li>
<li className="">Voies de desserte et leur dénomination (rayon 500 m)</li>
</ul>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-">4</td>
<td className="px-3 py-2">
<div className="flex gap-2 items-center">
<input className="hidden" type="file"/>
<button className="inline-flex gap-1.5 hover:bg-neutral-50 text-xs text-neutral-700 bg-white border-neutral-200 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 items-center" data-action="upload" type="button">Supprimer</button>
</div>
</td>
</tr>

<tr className="" data-row="" data-section="required">
<td className="px-3 py2">
<label className="flex items-start gap-2 cursor-pointer">
<span className="relative mt-0.5">
<input checked="" className="sr-only peer" type="checkbox"/>
<span className="w-5 h-5 border-2 border-[#649DAD] bg-[#649DAD] rounded flex items-center justify-center peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white" fill="currentColor" viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 4 9.293L8 13.293l7.293-7.293a1 1 0 0 1 1.414 0z" fill-rule="evenodd"></path>
</svg>
</span>
</span>
<span className="flex flex-col">
<span className="text-sm font-medium text-neutral-900">Plan du contexte urbanistique et paysager</span>
<span className="mt-0.5 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] border-[#649DAD]/30 bg-[#649DAD]/10 text-[#649DAD]">Requis</span>
</span>
</label>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">1/1.000 ou 1/500</td>
<td className="px-3 py-2">
<ul className="text-[12px] text-neutral-600 list-disc pl-4 space-y-0.5">
<li className="">Orientation, voirie et statut juridique</li>
<li className="">Constructions existantes (50 m), relief, végétation</li>
<li className="">Arbres/haies remarquables, éléments marquants (cours d’eau...)</li>
<li className="">Indication des prises de vue photo</li>
</ul>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">4</td>
<td className="px-3 py-2">
<div className="flex gap-2 items-center">
<input className="hidden" type="file"/>
<div className="flex gap-2 items-center">
<input className="hidden" type="file"/>
<button className="inline-flex gap-1.5 hover:bg-neutral-50 text-xs text-neutral-700 bg-white border-neutral-200 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 items-center" data-action="upload" type="button">Supprimer</button>
</div></div>
</td>
</tr>

<tr className="" data-row="" data-section="required">
<td className="px-3 py-2">
<label className="flex items-start gap-2 cursor-pointer">
<span className="relative mt-0.5">
<input checked="" className="sr-only peer" type="checkbox"/>
<span className="w-5 h-5 border-2 border-[#649DAD] bg-[#649DAD] rounded flex items-center justify-center peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-[12px] h-[12px]" data-icon-replaced="true" fill="currentColor" strokeWidth="2" style={{width: '12px', height: '12px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 4 9.293L8 13.293l7.293-7.293a1 1 0 0 1 1.414 0z" fill-rule="evenodd"></path>
</svg>
</span>
</span>
<span className="flex flex-col">
<span className="text-sm font-medium text-neutral-900">Plan d’implantation</span>
<span className="mt-0.5 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] border-[#649DAD]/30 bg-[#649DAD]/10 text-[#649DAD]">Requis</span>
</span>
</label>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">1/500 ou 1/200</td>
<td className="px-3 py-2">
<ul className="text-[12px] text-neutral-600 list-disc pl-4 space-y-0.5">
<li className="">Limites, courbes de niveau, coupes long./transv.</li>
<li className="">Existants/projetés, servitudes, infrastructures</li>
<li className="">Aménagement projeté (reculs, clôtures, parkings)</li>
<li className="">Végétation à maintenir/abattre + replantations</li>
<li>Repère domaine public, équipements voirie, Code de l’Eau</li>
</ul>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">4</td>
<td className="px-3 py-2">
<div className="flex gap-2 items-center">
<input className="hidden" type="file"/>
<button className="inline-flex gap-1.5 hover:bg-neutral-50 text-xs text-neutral-700 bg-white border-neutral-200 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 items-center" data-action="upload" type="button">Supprimer</button>
</div>
</td>
</tr>

<tr className="" data-row="" data-section="required">
<td className="px-3 py-2">
<label className="flex items-start gap-2 cursor-pointer">
<span className="relative mt-0.5">
<input checked="" className="sr-only peer" type="checkbox"/>
<span className="w-5 h-5 border-2 border-[#649DAD] bg-[#649DAD] rounded flex items-center justify-center peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-[12px] h-[12px]" data-icon-replaced="true" fill="currentColor" strokeWidth="2" style={{width: '12px', height: '12px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 4 9.293L8 13.293l7.293-7.293a1 1 0 0 1 1.414 0z" fill-rule="evenodd"></path>
</svg>
</span>
</span>
<span className="flex flex-col">
<span className="text-sm font-medium text-neutral-900">Plan de visualisation du projet</span>
<span className="mt-0.5 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] border-[#649DAD]/30 bg-[#649DAD]/10 text-[#649DAD]">Requis</span>
</span>
</label>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">1/100 ou 1/50</td>
<td className="px-3 py-2">
<ul className="text-[12px] text-neutral-600 list-disc pl-4 space-y-0.5">
<li className="">Plans de niveaux (L x H x P, affectations)</li>
<li className="">Nb/surface de logements, élévations</li>
<li className="">Légende matériaux/toitures</li>
<li className="">Coupes cotées (rez, sol exist./projeté, contiguïtés)</li>
<li className="">Composition parois/toitures, conduits fumée/ventilation</li>
</ul>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">4</td>
<td className="px-3 py-2">
<div className="flex gap-2 items-center">
<input className="hidden" type="file"/>
<button className="inline-flex gap-1.5 hover:bg-neutral-50 text-xs text-neutral-700 bg-white border-neutral-200 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 items-center" data-action="upload" type="button">Supprimer</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>


<div className="bg-white border-neutral-200 border rounded-md sm:col-span-2 w-full">
<div className="flex border-neutral-200 border-b pt-2 pr-3 pb-2 pl-3 items-center justify-between">
<div className="text-sm font-semibold text-neutral-900 tracking-tight">Plans complémentaires (si d’application)</div>
<div className="text-[12px] text-neutral-500">Ajoutez uniquement si nécessaire</div>
</div><div className="overflow-x-auto p-0 w-full" style={{width: '100%'}}>
<table className="w-full border-collapse text-sm">
<thead className="bg-neutral-50 text-neutral-700">
<tr className="">
<th className="text-[13px] font-medium text-left pt-2 pr-3 pb-2 pl-3">Plan</th>
<th className="text-left px-3 py-2 text-[13px] font-medium">Échelle</th>
<th className="text-left px-3 py-2 text-[13px] font-medium">Caractéristiques minimales</th>
<th className="text-left px-3 py-2 text-[13px] font-medium">Exemplaires</th>
<th className="text-left px-3 py-2 text-[13px] font-medium">Action</th>
</tr>
</thead>
<tbody className="align-top" id="plans-optional-rows">

<tr className="" data-row="" data-section="optional">
<td className="px-3 py-">
<label className="flex items-start gap-2 cursor-pointer">
<span className="relative mt-0.5">
<input className="sr-only peer" type="checkbox"/>
<span className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 4 9.293L8 13.293l7.293-7.293a1 1 0 0 1 1.414 0z" fill-rule="evenodd"></path>
</svg>
</span>
</span>
<span className="text-sm font-medium text-neutral-900">Modification, création ou suppression de voirie</span>
</label>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">1/200 ou 1/1.000 (profils), 1/100 ou 1/50 (transversaux)</td>
<td className="px-3 py-2">
<ul className="text-[12px] text-neutral-600 list-disc pl-4 space-y-0.5">
<li className="">Plan, profils en long</li>
<li>Coupe-type avec matériaux</li>
</ul>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">Selon cas</td>
<td className="px-3 py-2">
<div className="flex items-center gap-2">
<input className="hidden" type="file"/>
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0  1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 15V3"></path></svg>
                  Uploader
                </button>
<div className="text-[12px] text-neutral-500" data-status="">—</div>
</div>
</td>
</tr>

<tr className="" data-row="" data-section="optional">
<td className="px-3 py-2">
<label className="flex items-start gap-2 cursor-pointer">
<span className="relative mt-0.5">
<input className="sr-only peer" type="checkbox"/>
<span className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 4 9.293L8 13.293l7.293-7.293a1 1 0 0 1 1.414 0z" fill-rule="evenodd"></path>
</svg>
</span>
</span>
<span className="text-sm font-medium text-neutral-900">Constructions groupées d’habitations</span>
</label>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">1/500 ou 1/200</td>
<td className="px-3 py-2">
<ul className="text-[12px] text-neutral-600 list-disc pl-4 space-y-0.5">
<li className="">Plan d’implantation avec limites des futurs lots</li>
</ul>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">Selon cas</td>
<td className="px-3 py-2">
<div className="flex items-center gap-2">
<input className="hidden" type="file"/>
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 15V3"></path></svg>
                  Uploader
                </button>
<div className="text-[12px] text-neutral-500" data-status="">—</div>
</div>
</td>
</tr>

<tr className="" data-row="" data-section="optional">
<td className="px-3 py-2">
<label className="flex items-start gap-2 cursor-pointer">
<span className="relative mt-0.5">
<input className="sr-only peer" type="checkbox"/>
<span className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 4 9.293L8 13.293l7.293-7.293a1 1 0 0 1 1.414 0z" fill-rule="evenodd"></path>
</svg>
</span>
</span>
<span className="text font-medium text-neutral-900">Modification sensible du relief du sol</span>
</label>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">1/500 ou 1/200</td>
<td className="px-3 py-2">
<ul className="text-[12px] text-neutral-600 list-disc pl-4 space-y-0.5">
<li>Relief existant/projeté (courbes 0,50 m)</li>
<li>Déblais/remblais, gestion des abords</li>
</ul>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">Selon cas</td>
<td className="px-3 py-2">
<div className="flex items-center gap-2">
<input className="hidden" type="file"/>
<button className="inline-flex items-center gap-.5 rounded-md border px-3 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 15V3"></path></svg>
                  Uploader
                </button>
<div className="text-[12px] text-neutral-500" data-status="">—</div>
</div>
</td>
</tr>

<tr className="" data-row="" data-section="optional">
<td className="px-3 py-2">
<label className="flex items-start gap-2 cursor-pointer">
<span className="relative mt-0.5">
<input className="sr-only peer" type="checkbox"/>
<span className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1414l- 8a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 4 9.293L8 13.293l7.293-7.293a1 1 0 0 1 1.414 0z" fill-rule="evenodd"></path>
</svg>
</span>
</span>
<span className="text-sm font-medium text-neutral-900">Placement d’enseignes ou dispositifs de publicité</span>
</label>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">1/50 ou 1/20</td>
<td className="px-3 py-2">
<ul className="text-[12px] text-neutral-600 list-disc pl-4 space-y-0.5">
<li>Plan, élévation, matériaux/tonalité</li>
</ul>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">Selon cas</td>
<td className="px-3 py-2">
<div className="flex items-center gap-2">
<input className="hidden" type="file"/>
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 15V3"></path></svg>
                  Uploader
                </button>
<div className="text-[12px] text-neutral-500" data-status="">—</div>
</div>
</td>
</tr>

<tr className="" data-row="" data-section="optional">
<td className="px-3 py-2">
<label className="flex items-start gap-2 cursor-pointer">
<span className="relative mt-0.5">
<input className="sr-only peer" type="checkbox"/>
<span className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 4 9.293L8 13.293l7.293-7.293a1 1 0 0 1 1.414 0z" fill-rule="evenodd"></path>
</svg>
</span>
</span>
<span className="text-sm font-medium text-neutral-900">Utilisation d’un terrain pour dépôt (véhicules, matériaux, déchets)</span>
</label>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">1/500 ou 1/200</td>
<td className="px-3 py-2">
<ul className="text-[12px] text-neutral-600 list-disc pl-4 space-y-0.5">
<li>Implantation, superficie/hauteur</li>
<li>Nature des matériaux, clôture</li>
<li>Situation après enlèvement, gestion des abords</li>
</ul>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">Selon cas</td>
<td className="px-3 py-2">
<div className="flex items-center gap-2">
<input className="hidden" type="file"/>
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 15V3"></path></svg>
                  Uploader
                </button>
<div className="text-[12px] text-neutral-500" data-status="">—</div>
</div>
</td>
</tr>

<tr className="" data-row="" data-section="optional">
<td className="px-3 py-2">
<label className="flex items-start gap-2 cursor-pointer">
<span className="relative mt-0.5">
<input className="sr-only peer" type="checkbox"/>
<span className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 10 0 1-1.414 0l-4-4A1 1 0 0 1 4 9.293L8 13.293l7.293-7.293a1 1 0 0 1 1.414 0z" fill-rule="evenodd"></path>
</svg>
</span>
</span>
<span className="text-sm font-medium text-neutral-900">Utilisation d’un terrain pour installations mobiles</span>
</label>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">1/500 ou 1/200</td>
<td className="px3 py-2">
<ul className="text-[12px] text-neutral-600 list-disc pl-4 space-y-0.5">
<li>Superficie, implantation</li>
<li>Genre/nombre, clôture éventuelle</li>
<li>Gestion des abords</li>
</ul>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">Selon cas</td>
<td className="px-3 py-2">
<div className="flex items-center gap-2">
<input className="hidden" type="file"/>
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 15V3"></path></svg>
                  Uploader
 </button>
<div className="text-[12px] text-neutral-500" data-status="">—</div>
</div>
</td>
</tr>

<tr className="" data-row="" data-section="optional">
<td className="px-3 py-2">
<label className="flex items-start gap-2 cursor-pointer">
<span className="relative mt-0.5">
<input className="sr-only peer" type="checkbox"/>
<span className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 4 9.293L8 13.293l7.293-7.293a1 1 0 0 1 1.414 0z" fill-rule="evenodd"></path>
</svg>
</span>
</span>
<span className="text-sm font-medium text-neutral-900">Boisement, déboisement, culture de sapins de Noël</span>
</label>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">1/500 ou 1/200</td>
<td className="px-3 py-2">
<ul className="text-[12px] text-neutral-600 list-disc pl-4 space-y-0.5">
<li>Situation et superficie</li>
<li className="">Essences</li>
</ul>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">Selon cas</td>
<td className="px-3 py-2">
<div className="flex items-center gap-2">
<input className="hidden" type="file"/>
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 55"></path><path className="" d="M12 15V3"></path></svg>
                  Uploader
                </button>
<div className="text-[12px text-neutral-500" data-status="">—</div>
</div>
</td>
</tr>

<tr className="" data-row="" data-section="optional">
<td className="pt-2 pr-3 pb-2 pl-3">
<label className="flex items-start gap-2 cursor-pointer">
<span className="relative mt-0.5">
<input ="sr-only="" peer"="" type="checkbox"/>
<span className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 4 9.293L8 13.293l7.293-7.293a1 1 0 0 1 1.414 0z" fill-rule="evenodd"></path>
</svg>
</span>
</span>
<span className="text-sm font-medium text-neutral-900">Abattage d’arbres isolés, haies, allées, végétation remarquable</span>
</label>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">1/500 ou 1/200</td>
<td className="px-3 py-2">
<ul className="text-[12px] text-neutral-600 list-disc pl-4 space-y-0.5">
<li>Arbres/haies à maintenir/abattre (essences)</li>
<li>Identification (genre/espèce, circonf., âge, répartition)</li>
<li className="">Situation après abattage + plantations compensatoires</li>
</ul>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">Selon cas</td>
<td className="px-3 py-2">
<div className="flex items-center gap-2">
<input className="hidden" type="file"/>
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" data-action="upload" type="button">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 15V3"></path></svg>
                  Uploader
                </button>
<div className="text-[12px] text-neutral-500" data-status="">—</div>
</div>
</td>
</tr>

<tr className="" data-row="" data-section="optional">
<td className="pt-2 pr-3 pb-2 pl-3">
<label className="flex items-start gap-2 cursor-pointer">
<span className="relative mt-0.5">
<input className="sr-only peer" type="checkbox"/>
<span className="w-5 h-5 border-2 border-neutral-300 rounded flex items-center justify-center peer-checked:bg-[#649DAD] peer-checked:border-[#649DAD] peer-focus:ring-2 peer-focus:ring-[#649DAD]/20">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewbox="0 0 20 20">
<path className="" clip-rule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 4 9.293L8 13.293l7.293-7.293a1 1 0 0 1 1.414 0z" fill-rule="evenodd"></path>
</svg>
</span>
</span>
<span className="text-sm font-medium text-neutral-900">Défrichement ou modification de végétation</span>
</label>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">1/500 ou 1/200</td>
<td className="px-3 py-2">
<ul className="text-[12px] text-neutral-600 list-disc pl-4 space-y-0.5">
<li className="">Situation/superficie</li>
<li>Nature de la végétation</li>
<li className="">Situation après modification</li>
</ul>
</td>
<td className="px-3 py-2 text-[13px] text-neutral-700">Selon cas</td>
<td className="px-3 py-2">
<div className="flex items-center gap-2">
<input className="hidden" type="file"/>
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" data-action="upload" type="button">
<svg box="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path className="" d="M7 10l5-5 5 5"></path><path className="" d="M12 15V3"></path></svg>
                  Uploader
                </button>
<div className="text-[12px] text-neutral-500" data="">—</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div><div className="sm:col-span-2 bg-neutral-50/60 border-neutral-200 border rounded-md pt-3 pr-3 pb-3 pl-3">
<div className="flex items-center justify-between gap-3 flex-wrap">
<div className="flex items-center gap-2 flex-wrap text-[12px] text-neutral-700">
<span>Plans requis: <span className="font-medium text-neutral-900" id="count-required">4</span></span>
<span>• Plans fournis: <span className="font-medium text-neutral-900" id="count-provided">0</span></span>
<span className="">• Manquants: <span className="font-medium text-neutral-900" id="count-missing">4</span></span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" id="btnPlansExport">
<svg className="w-4 h-4 text-neutral-700" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5z"></path><path className="" d="M14 2v6h6"></path><path className="" d="M16 13H8"></path><path className="" d="M16 17H8"></path></svg>
          Exporter la liste (PDF)
        </button>
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" id="btnPlansZip">
<svg className="w-4 h-4 text-neutral-700" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="5" rx="1" width="20" x="2" y="3"></rect><path className="" d="M4 8v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path><path className="" d="M10 12h4"></path></svg>
          Télécharger les plans (ZIP)
        </button>
</div>
</div>
</div>

</div>
</div>
</div>
</details>

<details className="group rounded-lg border open:shadow-sm border-neutral-200 bg-white" id="cadre-8" open="">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900">Cadre 8 — Données personnelles</div>
<svg className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4 space-y-4">
<div className="text-[13px] text-neutral-700 bg-neutral-50/60 border-neutral-200 border rounded-md pt-3 pr-3 pb-3 pl-3">Les traitements de données à caractère personnel ont un caractère réglementaire.
Conformément à la réglementation en matière de protection des données et au Code du développement territorial (CoDT), les données à caractère personnel ne seront utilisées par la Direction générale opérationnelle de l’Aménagement du territoire, du Logement, du Patrimoine et de l’Énergie du Service public de Wallonie, si la demande est introduite auprès d’un fonctionnaire délégué, ou par la commune auprès de laquelle la demande a été introduite si la demande est introduite auprès d’une commune, qu’en vue d’assurer le suivi de votre dossier.
Ces données ne seront communiquées qu’aux autorités, instances, commissions et services prévus dans le CoDT, et particulièrement son Livre IV, aux fins d’utilisation dans le cadre des finalités également détaillées dans le CoDT. Le SPW ou la commune peut également communiquer vos données à caractère personnel à des tiers si la loi l’y oblige ou si le SPW ou la commune estime de bonne foi qu’une telle divulgation est nécessaire pour se conformer à une procédure légale ou pour les besoins d’une procédure judiciaire.
Ces données ne seront ni vendues ni utilisées à des fins de marketing.
Elles seront conservées aussi longtemps que le permis ou le certificat d’urbanisme est valide. Pour les permis ou certificats d’urbanisme périmés, les données électroniques seront conservées sous une forme minimisant leur traitement au SPW ou à la commune de savoir qu’un permis ou certificat d’urbanisme vous a été attribué et qu’il est périmé.
Si la demande est introduite auprès d’un fonctionnaire délégué :
 Vous pouvez gratuitement rectifier vos données, vous opposer ou en limiter le traitement auprès du fonctionnaire délégué.
Sur demande via un formulaire disponible sur l’ABC des démarches du Portail de la Wallonie, vous pouvez gratuitement avoir accès à vos données ou obtenir de l’information sur un traitement qui vous concerne. Le Délégué à la protection des données du Service public de Wallonie en assurera le suivi.
 Toute correspondance est à adresser à dpo@spw.wallonie.be ou au Directeur Général du SPW – TLPE, rue des Brigades d’Irlande, 1 à 5100 Jambes.
Pour plus d’informations sur la protection des données à caractère personnel au SPW, rendez-vous sur l’ABC des démarches du Portail de la Wallonie.

Si la demande est introduite auprès d’une commune :
 Vous pouvez gratuitement rectifier vos données, vous opposer ou en limiter le traitement auprès de la commune.
Vous pouvez gratuitement avoir accès à vos données ou obtenir de l’information sur un traitement qui vous concerne en contactant le responsable du traitement – le Délégué à la protection des données (ou Data Protection Officer – DPO) – de la commune auprès de laquelle la demande a été introduite.
Enfin, si dans le mois de votre demande, vous n’avez aucune réaction du SPW lorsque la demande a été introduite auprès d’un fonctionnaire délégué, ou de la commune lorsque la demande a été introduite auprès d’une commune, vous pouvez introduire une réclamation soit directement à l’Autorité de protection des données (APD) : https://www.autoriteprotectiondonnees.be/ ou contacter l’Autorité de protection des données pour introduire une réclamation à l’adresse suivante : 35, Rue de la Presse à 1000 Bruxelles ou via l’adresse courriel : contact@apd-gba.be</div>
<label className="inline-flex items-center gap-2 text-sm"><input className="h-4 w-4 text-[#649DAD] border-neutral-300 rounded" id="consent-traitement" type="checkbox"/>Je confirme avoir pris connaissance des informations relatives à l’utilisation des données personnelles.</label>
</div>
</div>
</details>

<details className="group rounded-lg border open:shadow-sm border-neutral-200 bg-white" id="cadre-9" open="">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900">Cadre 9 — Signatures</div>
<svg className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4 space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="">
<div className="text-[13px] text-neutral-500 mb-2">Demandeur</div>
<div className="rounded-md border border-neutral-200 bg-neutral-50/60 p-3">
<canvas className="w-full h-40 bg-white rounded-md border border-neutral-200" height="320" id="sign-demandeur" width="1271"></canvas>
<div className="mt-2 flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs border-neutral-200 bg-white hover:bg-neutral-50" data-clear="sign-demandeur" type="button">Effacer</button>
<button className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800" data-save="sign-demandeur" type="button">Enregistrer</button>
</div>
</div>
</div>
<div className="">
<div className="text-[13px] text-neutral-500 mb-2">Architecte</div>
<div className="rounded-md border border-neutral-200 bg-neutral-50/60 p-3">
<canvas className="w-full h-40 bg-white rounded-md border border-neutral-200" height="320" id="sign-archi" width="1271"></canvas>
<div className="mt-2 flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs border-neutral-200 bg-white hover:bg-neutral-50" data-clear="sign-archi" type="button">Effacer</button>
<button className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800" data-save="sign-archi" type="button">Enregistrer</button>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="">
<label className="text-[13px] text-neutral-500">Fait à</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" id="sign-lieu" type="text"/>
</div>
<div className="">
<label className="text-[13px] text-neutral-500">Le</label>
<input className="mt-1 w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white" id="sign-date" type="date"/>
</div>
</div>

</div>
</div>
</details>

<details className="group open:shadow-sm bg-white border-neutral-200 border rounded-lg" open="">
<summary className="cursor-pointer select-none">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-sm font-semibold tracking-tight text-neutral-900">Annexe — Grille analytique</div>
<svg className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="border-t border-neutral-200">
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4 space-y-4">

<a className="sr-only focus:not-sr-only focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 inline-block text-[13px] text-neutral-700 bg-neutral-100 rounded px-3 py-1" href="#ga-content-start">Aller au contenu</a>

<div className="flex items-center justify-between gap-3 print:hidden">
<h2 className="text-[20px] sm:text-[22px] leading-tight font-semibold tracking-tight text-neutral-900">Annexe — Grille analytique des contraintes</h2>
<a aria-label="Ouvrir l’Étude de faisabilité" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-neutral-900 text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900" href="#etude-de-faisabilite" role="button">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
      Ouvrir l’Étude de faisabilité
      <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>

<div className="rounded-md border border-neutral-200 bg-neutral-50/60 p-3">
<div className="flex items-start gap-2 text-[13px]">
<svg className="lucide lucide-alert-triangle w-4 h-4 mt-0.5 text-[#B45309]" data-lucide="alert-triangle" fill="none" height="24" stroke="#B45309" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<p className="text-neutral-800">⚠️ Cette grille ne doit pas être complétée par le demandeur. Elle synthétise les contraintes légales et réglementaires applicables susceptibles d’influencer la conception du projet.</p>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-[260px,1fr] gap-4">

<aside className="space-y-3">
<div className="print:hidden">
<label className="text-[13px] text-neutral-500" htmlFor="ga-search">Rechercher dans la grille…</label>
<div className="mt-1 relative">
<input aria-label="Rechercher dans la grille" className="w-full rounded-md border p-2.5 text-sm border-neutral-200 bg-white pr-9 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900/10" id="ga-search" placeholder="Mots-clés, expressions…" type="search"/>
<svg className="lucide lucide-search w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
</div>
<nav aria-label="Sommaire de la grille" className="print:hidden">
<div className="text-[13px] text-neutral-500 mb-1">Sommaire</div>
<ul className="space-y-1">
<li className=""><a className="group flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900" data-toc-link="#amenagement" href="#amenagement"><span className="">Aménagement du territoire et urbanisme</span><span className="text-[11px] text-neutral-400 group-hover:text-neutral-500">A</span></a></li>
<li className=""><a className="group flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900" data-toc-link="#antecedents" href="#antecedents"><span>Antécédents de la demande</span><span className="text-[11px] text-neutral-400 group-hover:text-neutral-500">B</span></a></li>
<li className=""><a className="group flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900" data-toc-link="#patrimoine" href="#patrimoine"><span>Code wallon duimoine</span><span className="text-[11px] text-neutral-400 group-hover:text-neutral-500">C</span></a></li>
<li className=""><a className="group flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900" data-toc-link="#contraintes-env" href="#contraintes-env"><span className="">Contraintes environnementales et de terrain</span><span className="text-[11px] text-neutral-400 group-hover:text-neutral-500">D</span></a></li>
<li><a aria-current="true" className="group flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900" data-toc-link="#conservation-nature" href="#conservation-nature"><span>Conservation de la Nature</span><span className="text-[11px] text-neutral-400 group-hover:text-neutral-500">E</span></a></li>
<li><a className="group flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900" data-toc-link="#code-eau" href="#code-eau"><span>Code de l’eau</span><span className="text-[11px] text-neutral-400 group-hover:text-neutral-500">F</span></a></li>
<li><a className="group flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900" data-toc-link="#equipement" href="#equipement"><span>Équipement du terrain</span><span className="text-[11px] text-neutral-400 group-hover:text-neutral-500">G</span></a></li>
<li><a className="group flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900" data-toc-link="#autres" href="#autres"><span>Autres caractéristiques du bien</span><span className="text-[11px] text-neutral-400 group-hover:text-neutral-500">H</span></a></li>
<li><a className="group flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900" data-toc-link="#mention-reglementaire" href="#mention-reglementaire"><span>Mention réglementaire finale</span><span className="text-[11px] text-neutral-400 group-hover:text-neutral-500">I</span></a></li>
</ul>
</nav>
</aside>

<div className="space-y-6" id="ga-content-start">

<div className="flex items-center justify-end gap-2 print:hidden">
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-sm border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900" id="btn-collapse-all" type="button">
          Tout plier
        </button>
<button className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-sm border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900" id="btn-expand-all" type="button">
          Tout déplier
        </button>
</div>

<section className="space-y-2" id="amenagement">
<div className="group flex items-center justify-between">
<h3 className="text-[18px] leading-tight font-semibold tracking-tight text-neutral-900">Aménagement du territoire et urbanisme</h3>
<button aria-label="Copier le lien vers Aménagement du territoire et urbanisme" className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity inline-flex items-center gap-1 text-[12px] text-neutral-600 hover:text-neutral-900 focus:outline-none" data-anchor="#amenagement" type="button">
<svg className="lucide lucide-link-2 w-4 h-4" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
<span>#</span>
</button>
</div>
<ul className="list-disc pl-6 space-y-1.5 text-sm leading-6 text-neutral-800" data-acc-body="">
<li className="" data-filter-item="">Outils d’aménagement du territoire et d’urbanisme</li>
<li data-filter-item="">Schéma de développement territorial si application de l’article D.II.16 du CoDT</li>
<li data-filter-item="">Plan de secteur</li>
<li className="" data-filter-item="">Carte d’affectation des sols dans le cadre d’une ZEC/ZER</li>
<li data-filter-item="">Schéma de développement pluricommunal</li>
<li className="" data-filter-item="">Schéma de développement communal</li>
<li data-filter-item="">Schéma d’orientation local</li>
<li data-filter-item="">Guide régional d’urbanisme : RGBPmr – RGBPZu – RGBSR – RGUEDP – RUQAC</li>
<li data-filter-item="">Guide communal d’urbanisme</li>
<li data-filter-item="">Permis d’urbanisation</li>
<li className="" data-filter-item="">Bien comportant un arbre – arbuste – une haie remarquable</li>
<li data-filter-item="">Bien soumis à la taxation des bénéfices résultant de la planification</li>
<li data-filter-item="">Site à réaménager, site de réhabilitation paysagère et environnementale, périmètre de remembrement urbain, de rénovation urbaine, de revitalisation urbaine, zone d’initiative privilégiée</li>
</ul>
<div className="hidden text-[12px] text-neutral-500" data-empty="">Aucun résultat dans cette section.</div>
</section>

<section className="space-y-2" id="antecedents">
<div className="group flex items-center justify-between">
<h3 className="text-[18px] leading-tight font-semibold tracking-tight text-neutral-900">Antécédents de la demande</h3>
<button aria-label="Copier le lien vers Antécédents de la demande" className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity inline-flex items-center gap-1 text-[12px] text-neutral-600 hover:text-neutral-900 focus:outline-none" data-anchor="#antecedents" type="button">
<svg className="lucide lucide-link-2 w-4 h-4" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
<span>#</span>
</button>
</div>
<ul className="list-disc pl-6 space-y-1.5 text-sm leading-6 text-neutral-800" data-acc-body="">
<li data-filter-item="">Intro (phrase explicative)</li>
<li data-filter-item="">Permis d’urbanisme déjà délivrés pour le terrain</li>
<li data-filter-item="">Certificat d’urbanisme n°2</li>
<li data-filter-item="">Autres permis relatifs au bien (urbanisation, autorisation de classe 3, environnement, unique, implantation commerciale, intégrée, …)</li>
<li className="" data-filter-item="">Procès-verbal de constat d’une infraction urbanistique</li>
</ul>
<div className="hidden text-[12px] text-neutral-500" data-empty="">Aucun résultat dans cette section.</div>
</section>

<section className="space-y-2" id="patrimoine">
<div className="group flex items-center justify-between">
<h3 className="text-[18px] leading-tight font-semibold tracking-tight text-neutral-900">Code wallon du Patrimoine</h3>
<button aria-label="Copier le lien vers Code wallon du Patrimoine" className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity inline-flex items-center gap-1 text-[12px] text-neutral-600 hover:text-neutral-900 focus:outline-none" data-anchor="#patrimoine" type="button">
<svg className="lucide lucide-link-2 w-4 h-4" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
<span>#</span>
</button>
</div>
<ul className="list-disc pl-6 space-y-1.5 text-sm leading-6 text-neutral-800" data-acc-body="">
<li data-filter-item="">Bien classé ou bien assimilé (inscription sur la liste de sauvegarde ou soumis provisoirement aux effets du classement)</li>
<li data-filter-item="">Bien situé dans une zone de protection d’un bien classé</li>
<li data-filter-item="">Bien classé inscrit sur la liste du patrimoine exceptionnel de Wallonie</li>
<li data-filter-item="">Bien inscrit sur la liste du patrimoine mondial ou situé dans une zone tampon</li>
<li data-filter-item="">Bien à l’inventaire régional du patrimoine – bien pastillé</li>
<li data-filter-item="">Bien situé dans le périmètre de la carte archéologique</li>
<li data-filter-item="">Grand projet au sens du COPAT</li>
</ul>
<div className="hidden text-[12px] text-neutral-500" data-empty="">Aucun résultat dans cette section.</div>
</section>

<section className="space-y-2" id="contraintes-env">
<div className="group flex items-center justify-between">
<h3 className="text-[18px] leading-tight font-semibold tracking-tight text-neutral-900">Contraintes environnementales et de terrain</h3>
<button aria-label="Copier le lien vers Contraintes environnementales et de terrain" className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity inline-flex items-center gap-1 text-[12px] text-neutral-600 hover:text-neutral-900 focus:outline-none" data-anchor="#contraintes-env" type="button">
<svg className="lucide lucide-link-2 w-4 h-4" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
<span>#</span>
</button>
</div>
<ul className="list-disc pl-6 space-y-1.5 text-sm leading-6 text-neutral-800" data-acc-body="">
<li data-filter-item="">Risques naturels ou contraintes géotechniques majeurs</li>
<li data-filter-item="">L’inondation : très faible – faible – moyen – élevé – zone ayant été inondée</li>
<li data-filter-item="">Risques d’accident majeur (SEVESO)</li>
<li data-filter-item="">Création – modification d’un établissement SEVESO</li>
<li data-filter-item="">Suite (contraintes)</li>
<li data-filter-item="">Le ruissellement concentré : Très faible – faible – moyen – élevé – zone d’incertitude</li>
<li data-filter-item="">L’éboulement d’une paroi rocheuse</li>
<li className="" data-filter-item="">Le glissement de terrain</li>
<li data-filter-item="">Le karst</li>
<li data-filter-item="">Les affaissements miniers</li>
<li data-filter-item="">Le risque sismique</li>
<li data-filter-item="">Autre risque …</li>
<li data-filter-item="">Localisation susceptible d’accroître le risque d’accident majeur… (SEVESO existant)</li>
<li data-filter-item="">Présence d’un cours d’eau navigable / non navigable de 1ère – 2ème – 3ème catégorie – sans catégorie</li>
</ul>
<div className="hidden text-[12px] text-neutral-500" data-empty="">Aucun résultat dans cette section.</div>
</section>

<section className="space-y-2" id="conservation-nature">
<div className="group flex items-center justify-between">
<h3 className="text-[18px] leading-tight font-semibold tracking-tight text-neutral-900">Conservation de la Nature</h3>
<button aria-label="Copier le lien vers Conservation de la Nature" className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity inline-flex items-center gap-1 text-[12px] text-neutral-600 hover:text-neutral-900 focus:outline-none" data-anchor="#conservation-nature" type="button">
<svg className="lucide lucide-link-2 w-4 h-4" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
<span>#</span>
</button>
</div>
<div className="text-sm leading-6 text-neutral-800">
          Bien situé dans/à proximité de :
        </div>
<ul className="list-disc pl-6 space-y-1.5 text-sm leading-6 text-neutral-800" data-acc-body="">
<li data-filter-item="">Site Natura 2000 proposé ou arrêté</li>
<li className="" data-filter-item="">Réserve naturelle domaniale/agréée</li>
<li data-filter-item="">Cavité souterraine d’intérêt scientifique</li>
<li data-filter-item="">Zone humide d’intérêt biologique</li>
<li data-filter-item="">Réserve forestière</li>
<li data-filter-item="">Site de grand intérêt biologique (SGIB)</li>
</ul>
<div className="hidden text-[12px] text-neutral-500" data-empty="">Aucun résultat dans cette section.</div>
</section>

<section className="space-y-2" id="code-eau">
<div className="group flex items-center justify-between">
<h3 className="text-[18px] leading-tight font-semibold tracking-tight text-neutral-900">Code de l’eau</h3>
<button aria-label="Copier le lien vers Code de l’eau" className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity inline-flex items-center gap-1 text-[12px] text-neutral-600 hover:text-neutral-900 focus:outline-none" data-anchor="#code-eau" type="button">
<svg className="lucide lucide-link-2 w-4 h-4" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
<span>#</span>
</button>
</div>
<ul className="list-disc pl-6 space-y-1.5 text-sm leading-6 text-neutral-800" data-acc-body="">
<li data-filter-item="">Épuration des eaux usées et gestion des eaux pluviales</li>
<li className="" data-filter-item="">Bien situé dans le périmètre du PCGE ou du PASH…</li>
<li data-filter-item="">Captage</li>
<li className="" data-filter-item="">Zone de prévention rapprochée / éloignée / forfaitaire autour de captage d’eau souterraine</li>
<li className="" data-filter-item="">Zone de surveillance relative aux captages d’eaux potabilisables</li>
</ul>
<div className="hidden text-[12px] text-neutral-500" data-empty="">Aucun résultat dans cette section.</div>
</section>

<section className="space-y-2" id="equipement">
<div className="group flex items-center justify-between">
<h3 className="text-[18px] leading-tight font-semibold tracking-tight text-neutral-900">Équipement du terrain</h3>
<button aria-label="Copier le lien vers Équipement du terrain" className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity inline-flex items-center gap-1 text-[12px] text-neutral-600 hover:text-neutral-900 focus:outline-none" data-anchor="#equipement" type="button">
<svg className="lucide lucide-link-2 w-4 h-4" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
<span>#</span>
</button>
</div>
<p className="text-sm leading-6 text-neutral-800" data-acc-body="" data-filter-item="">Terrain disposant d’un accès à une voirie suffisamment équipée en eau, en électricité, pourvue d’un revêtement solide et d’une largeur suffisante, compte tenu de la situation des lieux.</p>
<div className="hidden text-[12px] text-neutral-500" data-empty="">Aucun résultat dans cette section.</div>
</section>

<section className="space-y-2" id="autres">
<div className="group flex items-center justify-between">
<h3 className="text-[18px] leading-tight font-semibold tracking-tight text-neutral-900">Autres caractéristiques du bien</h3>
<button aria-label="Copier le lien vers Autres caractéristiques du bien" className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity inline-flex items-center gap-1 text-[12px] text-neutral-600 hover:text-neutral-900 focus:outline-none" data-anchor="#autres" type="button">
<svg className="lucide lucide-link-2 w-4 h-4" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
<span>#</span>
</button>
</div>
<ul className="list-disc pl-6 space-y-1.5 text-sm leading-6 text-neutral-800" data-acc-body="">
<li className="" data-filter-item="">Périmètre de reconnaissance économique</li>
<li className="" data-filter-item="">Décret SOL – BDES : zone pêche – zone lavande – sans couleur</li>
<li className="" data-filter-item="">Situé le long d’une voirie régionale – autoroute</li>
<li className="" data-filter-item="">Situé le long d’une voie de chemin de fer</li>
<li data-filter-item="">Situé le long d’un RAVeL</li>
<li className="" data-filter-item="">Situé dans un périmètre d’intérêt paysager (ADESA)</li>
<li className="" data-filter-item="">Présence d’une ligne haute-tension – canalisation</li>
<li className="" data-filter-item="">Zone de bruit de l’aéroport de Liège-Bierset ou de Charleroi-Bruxelles Sud : PDLT A / B / C / D</li>
<li className="" data-filter-item="">Bien repris dans le plan relatif à l’habitat permanent</li>
<li className="" data-filter-item="">Critères de salubrité pour les logements du Code wallon de l’habitation durable</li>
</ul>
<div className="hidden text-[12px] text-neutral-500" data-empty="">Aucun résultat dans cette section.</div>
</section>

<section className="space-y-2" id="mention-reglementaire">
<div className="border-t border-neutral-200 pt-3">
</div>
</section>
</div>
</div>

<button aria-label="Haut du cadre" className="fixed right-5 bottom-5 z-40 print:hidden inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-sm border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900" id="btn-top-frame" type="button">
<svg className="lucide lucide-chevron-up w-4 h-4" data-lucide="chevron-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
    Haut du cadre
  </button>


</div>
</div>
</details>
</section></div>
</main>

<footer className="border-t border-neutral-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
<div className="text-[12px] text-neutral-500">© Airplan</div>
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
