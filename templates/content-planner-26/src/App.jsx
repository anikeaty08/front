import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icon init
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
      });

      // Mock Data
      const ideasRecent = [
        { id: 'i1', title: 'Reel: 3 errores en tu bio de IG', dateISO: new Date().toISOString() },
        { id: 'i2', title: 'Newsletter: Caso práctico KPI SMART', dateISO: new Date(Date.now() - 86400000).toISOString() },
        { id: 'i3', title: 'Hilo LI: Framework AIDA aplicado a SaaS', dateISO: new Date(Date.now() - 2*86400000).toISOString() },
      ];
      const plansRecent = [
        { id: 'p1', title: 'Lanzamiento Q4 Reels', status: 'En curso' },
        { id: 'p2', title: 'Newsletter Octubre', status: 'Borrador' },
        { id: 'p3', title: 'YouTube Shorts Semana 39', status: 'Publicado' },
      ];
      const calendar = { weekSummary: { weekCount: 8, todayCount: 2 } };
      const summaryData = {
        yesterday: { published: ['Carrusel IG: “Bio en 60s”', 'Post LI: “Aprendizajes Q3”'] },
        today: { scheduled: ['Reel IG: “Hook en 5 pasos”', 'Newsletter: “Cómo medir alcance”', 'YT Short: “CTA rápido”'] },
        tomorrow: { scheduled: ['LI Post: “Mapa de mensajes”', 'IG Reel: “Errores comunes”', 'Tweetstorm: “KPIs mínimos”', 'IG Story: “Detrás de cámaras”', 'YT Short: “Métrica norte”', 'Extra: “Bonus”'] },
      };
      const plansFull = [
        { id:'p1', name:'Lanzamiento Q4 Reels', description:'Campaña de Reels para empuje de marca.', status:'active', startDate:'2025-09-10', endDate:'2025-10-20', channels:['IG','YT'], progress:{doc:62, schedule:40, approvals:20, overall:48} },
        { id:'p2', name:'Newsletter Octubre', description:'4 envíos semanales + recap.', status:'draft', startDate:'2025-10-01', endDate:'2025-10-31', channels:['LI','GEN'], progress:{doc:30, schedule:10, approvals:0, overall:18} },
        { id:'p3', name:'YouTube Shorts S39', description:'Serie Shorts educativos.', status:'active', startDate:'2025-09-16', endDate:'2025-09-22', channels:['YT'], progress:{doc:70, schedule:60, approvals:30, overall:56} },
        { id:'p4', name:'TikTok Noviembre', description:'Exploración formatos rápidos.', status:'draft', startDate:'2025-11-01', endDate:'2025-11-30', channels:['TT'], progress:{doc:10, schedule:0, approvals:0, overall:6} },
      ];

      // Utilities
      const fmtDate = (iso) => {
        const d = new Date(iso);
        return d.toLocaleDateString(undefined, { year:'numeric', month:'short', day:'numeric' });
      };
      const fmtTime = (iso) => {
        const d = new Date(iso);
        return d.toLocaleTimeString(undefined, { hour:'numeric', minute:'2-digit' });
      };

      // Dashboard population
      function loadDashboard() {
        // Ideas
        const ideasList = document.getElementById('ideasList');
        const ideasEmpty = document.getElementById('ideasEmpty');
        const ideasError = document.getElementById('ideasError');
        ideasList.innerHTML = '';
        ideasError.classList.add('hidden');
        if (!ideasRecent || ideasRecent.length === 0) {
          ideasEmpty.classList.remove('hidden');
        } else {
          ideasEmpty.classList.add('hidden');
          ideasRecent.slice(0,3).forEach(item => {
            const row = document.createElement('button');
            row.setAttribute('role','listitem');
            row.className = 'w-full text-left flex items-center justify-between gap-3 rounded-md border border-[#E5E5E5] bg-white/50 px-3 py-2 hover:bg-white/70 hover:shadow-xs focus:outline-none focus:ring-1 focus:ring-black/20';
            row.onclick = () => navigateTo(`/ideas/${item.id}`);
            row.innerHTML = `
              <div class="flex items-center gap-2 min-w-0">
                <i data-lucide="feather" class="h-4 w-4 text-black/60" aria-hidden="true"></i>
                <span class="truncate text-sm">${item.title}</span>
              </div>
              <span class="text-xs text-black/60 shrink-0">${fmtDate(item.dateISO)}</span>
            `;
            ideasList.appendChild(row);
          });
        }

        // Plans
        const plansList = document.getElementById('plansList');
        const plansEmpty = document.getElementById('plansEmpty');
        plansList.innerHTML = '';
        if (!plansRecent || plansRecent.length === 0) {
          plansEmpty.classList.remove('hidden');
        } else {
          plansEmpty.classList.add('hidden');
          plansRecent.slice(0,3).forEach(p => {
            const row = document.createElement('button');
            row.className = 'w-full text-left flex items-center justify-between gap-3 rounded-md border border-[#E5E5E5] bg-white/50 px-3 py-2 hover:bg-white/70 hover:shadow-xs focus:outline-none focus:ring-1 focus:ring-black/20';
            row.onclick = () => navigateTo(`/planes`);
            row.innerHTML = `
              <div class="flex items-center gap-2 min-w-0">
                <i data-lucide="file-text" class="h-4 w-4 text-black/60" aria-hidden="true"></i>
                <span class="truncate text-sm">${p.title}</span>
              </div>
              <span class="text-xs text-black/60 shrink-0">${p.status}</span>
            `;
            plansList.appendChild(row);
          });
        }

        // Publications
        document.getElementById('pubWeek').textContent = `${calendar.weekSummary.weekCount} programadas para esta semana`;
        document.getElementById('pubToday').textContent = `Hoy tienes ${calendar.weekSummary.todayCount}`;

        // Summary
        const fillList = (id, arr, moreId) => {
          const el = document.getElementById(id);
          el.innerHTML = '';
          const moreBtn = document.getElementById(moreId);
          const more = arr.length > 5;
          arr.slice(0,5).forEach(t => {
            const li = document.createElement('li');
            li.textContent = t;
            el.appendChild(li);
          });
          moreBtn.classList.toggle('hidden', !more);
        };
        fillList('yesterdayList', summaryData.yesterday.published, 'yesterdayMore');
        fillList('todayList', summaryData.today.scheduled, 'todayMore');
        fillList('tomorrowList', summaryData.tomorrow.scheduled, 'tomorrowMore');

        lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
      }

      // Ideas List population
      const ideasStore = [
        { id:'i1', title:'Reel: 3 errores en tu bio de IG', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), tags:['IG','Reels'], channel:'IG', priority:'high', status:'active', pinned:false },
        { id:'i4', title:'Backlog: KPIs mínimos para freelancers', createdAt: new Date(Date.now()-3600_000).toISOString(), updatedAt: new Date().toISOString(), tags:['LI'], channel:'LI', priority:'medium', status:'active', pinned:true },
        { id:'i2', title:'Newsletter: Caso práctico KPI SMART', createdAt: new Date(Date.now()-86400_000).toISOString(), updatedAt: new Date(Date.now()-86400_000).toISOString(), tags:['GEN'], priority:'low', status:'active', pinned:false },
        { id:'i3', title:'Hilo LI: Framework AIDA aplicado a SaaS', createdAt: new Date(Date.now()-7*86400_000).toISOString(), updatedAt: new Date(Date.now()-7*86400_000).toISOString(), tags:['LI'], status:'active', pinned:false },
      ];

      function groupIdeas() {
        const now = new Date();
        const startOfToday = new Date(now); startOfToday.setHours(0,0,0,0);
        const startOfYesterday = new Date(startOfToday); startOfYesterday.setDate(startOfToday.getDate()-1);
        const startOfLastWeek = new Date(startOfToday); startOfLastWeek.setDate(startOfToday.getDate()-7);
        const groups = { 'Hoy': [], 'Ayer': [], 'Semana pasada': [], 'Último mes': [] };
        for (const it of ideasStore) {
          const d = new Date(it.createdAt);
          if (d >= startOfToday) groups['Hoy'].push(it);
          else if (d >= startOfYesterday && d < startOfToday) groups['Ayer'].push(it);
          else if (d >= startOfLastWeek) groups['Semana pasada'].push(it);
          else groups['Último mes'].push(it);
        }
        return groups;
      }

      function renderIdeasList() {
        const container = document.getElementById('ideasGroups');
        container.innerHTML = '';
        const groups = groupIdeas();
        const order = ['Hoy','Ayer','Semana pasada','Último mes'];
        order.forEach((name, idx) => {
          const items = groups[name] || [];
          const section = document.createElement('section');
          section.setAttribute('role','region');
          section.className = 'scroll-mt-24';
          const sticky = document.createElement('div');
          sticky.className = 'sticky -top-2 z-20 flex items-baseline justify-between bg-[#FDF6EB]/80 backdrop-blur px-1 py-2 border-b border-[#E5E5E5]';
          sticky.innerHTML = `
            <div class="flex items-center gap-2">
              <h2 class="text-xl tracking-tight" style="font-family:'Playfair Display',serif; font-weight:600">${name}</h2>
              <span class="text-xs text-black/60">· ${items.length} notas</span>
            </div>
            <button aria-expanded="true" class="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="toggleGroup(this)">
              <span>Colapsar</span>
              <i data-lucide="chevron-up" class="h-4 w-4" aria-hidden="true"></i>
            </button>
          `;
          const list = document.createElement('div');
          list.className = 'mt-3 space-y-2';
          list.setAttribute('role','list');

          if (items.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'rounded-md border border-[#E5E5E5] bg-white/50 px-3 py-2 text-sm text-black/60';
            empty.textContent = 'Sin notas en este rango';
            list.appendChild(empty);
          } else {
            // Pinned first
            items.sort((a,b)=> (b.pinned?1:0)-(a.pinned?1:0) || new Date(b.createdAt)-new Date(a.createdAt));
            items.forEach(it => {
              const row = document.createElement('div');
              row.setAttribute('role','listitem');
              row.className = 'group rounded-md border border-[#E5E5E5] bg-white/50 px-3 py-2 hover:bg-white/70 hover:shadow-xs';
              row.innerHTML = `
                <div class="flex items-center justify-between gap-3">
                  <div class="flex items-center gap-2 min-w-0">
                    <i data-lucide="feather" class="h-4 w-4 text-black/60" aria-hidden="true"></i>
                    <div class="min-w-0">
                      <div class="flex items-center gap-2">
                        <button class="truncate text-sm text-left hover:underline underline-offset-4 focus:outline-none focus:ring-1 focus:ring-black/20 rounded px-1" onclick="navigateTo('/ideas/${it.id}')">${it.title}</button>
                        ${it.pinned ? '<span class="text-[10px] px-1.5 py-0.5 rounded bg-[var(--ireal-accent-400)]/12">Pineado</span>':''}
                      </div>
                      <div class="mt-1 flex items-center gap-1.5">
                        ${(it.tags||[]).map(t=>`<span class="text-[10px] px-1.5 py-0.5 rounded bg-[var(--ireal-accent-400)]/12">${t}</span>`).join('')}
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 shrink-0">
                    <span class="text-xs text-black/60">${fmtTime(it.createdAt)}</span>
                    <div class="hidden sm:flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                      <button class="p-1 rounded hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/20" aria-label="Pinear" onclick="togglePin('${it.id}')"><i data-lucide="pin" class="h-4 w-4"></i></button>
                      <button class="p-1 rounded hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/20" aria-label="Convertir a plan" onclick="convertToPlan('${it.id}')"><i data-lucide="wand-2" class="h-4 w-4"></i></button>
                      <button class="p-1 rounded hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/20" aria-label="Programar" onclick="navigateTo('/calendario?focus=today')"><i data-lucide="calendar-plus" class="h-4 w-4"></i></button>
                      <button class="p-1 rounded hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/20" aria-label="Editar" onclick="navigateTo('/ideas/${it.id}')"><i data-lucide="pencil" class="h-4 w-4"></i></button>
                      <button class="p-1 rounded hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/20" aria-label="Archivar" onclick="archiveIdea('${it.id}')"><i data-lucide="archive" class="h-4 w-4"></i></button>
                      <button class="p-1 rounded hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/20" aria-label="Eliminar" onclick="deleteIdea('${it.id}')"><i data-lucide="trash" class="h-4 w-4"></i></button>
                    </div>
                    <div class="sm:hidden">
                      <button class="p-1 rounded hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/20" aria-label="Más acciones" onclick="toast('Acciones rápidas')"><i data-lucide="more-vertical" class="h-4 w-4"></i></button>
                    </div>
                  </div>
                </div>
              `;
              list.appendChild(row);
            });
          }

          section.appendChild(sticky);
          section.appendChild(list);
          container.appendChild(section);
        });
        lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
      }

      function toggleGroup(btn) {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        btn.querySelector('span').textContent = expanded ? 'Expandir' : 'Colapsar';
        const icon = btn.querySelector('[data-lucide]');
        icon && (icon.setAttribute('data-lucide', expanded ? 'chevron-down' : 'chevron-up'));
        const list = btn.parentElement.nextElementSibling;
        if (expanded) {
          list.classList.add('hidden');
        } else {
          list.classList.remove('hidden');
        }
        lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
      }

      // Quick Add
      document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.getAttribute('contenteditable') !== 'true') {
          const atIdeas = currentRoute.startsWith('/ideas') || currentRoute === '/ideas';
          if (atIdeas) {
            e.preventDefault();
            document.getElementById('ideasSearch').focus();
          } else {
            const ps = document.getElementById('plansSearch');
            if (ps) { e.preventDefault(); ps.focus(); }
          }
        }
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
          const onEditor = currentRoute.startsWith('/ideas/') || currentRoute === '/ideas/new';
          if (onEditor) { e.preventDefault(); openAttachPlansModal(); }
        }
      });

      const quickAddInput = () => document.getElementById('quickAddInput');
      document.addEventListener('DOMContentLoaded', () => {
        const qa = quickAddInput();
        if (qa) {
          qa.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && qa.value.trim().length) {
              createIdea(qa.value.trim());
              qa.value = '';
              sparkle();
            }
          });
          document.getElementById('quickAddExpand').addEventListener('click', ()=>{
            document.getElementById('quickAddAdvanced').classList.toggle('hidden');
          });
        }
      });

      function createIdea(title) {
        const newId = 'i' + Math.random().toString(36).slice(2,7);
        const now = new Date().toISOString();
        const it = { id:newId, title, createdAt: now, updatedAt: now, tags:[], status:'active', pinned:false };
        ideasStore.unshift(it);
        if (currentRoute.startsWith('/ideas')) renderIdeasList();
        loadDashboard();
        toast('Idea creada ✨');
      }

      function togglePin(id) {
        const it = ideasStore.find(x=>x.id===id);
        if (!it) return;
        it.pinned = !it.pinned;
        renderIdeasList();
        toast(it.pinned ? 'Pineada' : 'Despineada');
      }
      function convertToPlan(id) {
        const it = ideasStore.find(x=>x.id===id);
        if (!it) return;
        toast('Plan creado a partir de la idea');
        navigateTo('/planes');
      }
      function archiveIdea(id) {
        const idx = ideasStore.findIndex(x=>x.id===id);
        if (idx>=0) { ideasStore.splice(idx,1); renderIdeasList(); loadDashboard(); toast('Idea archivada'); }
      }
      function deleteIdea(id) {
        archiveIdea(id);
      }

      // Idea Editor mock
      function loadIdeaEditor(idOrNew) {
        const titleEl = document.getElementById('ideaTitle');
        const editor = document.getElementById('editorArea');
        const edited = document.getElementById('ideaEditedAt');
        const chips = document.getElementById('linkedPlansChips');
        if (idOrNew === 'new') {
          titleEl.textContent = 'Escribe un título…';
          editor.textContent = 'Escribe aquí…';
          edited.textContent = 'Última edición ahora mismo';
          chips.classList.add('hidden');
        } else {
          const it = ideasStore.find(x=>x.id===idOrNew) || ideasStore[0];
          titleEl.textContent = it?.title || 'Nueva idea';
          editor.textContent = 'Borrador de notas…';
          edited.textContent = 'Última edición hace 2 min';
          // Example linked plans
          chips.className = 'mt-3 flex flex-wrap gap-2';
          chips.innerHTML = `
            <span class="text-xs px-2 py-1 rounded bg-[var(--ireal-accent-400)]/12 border border-[#E5E5E5]">Vinculada a: ${plansFull[0].name}</span>
          `;
        }
        // AI nudge simulation on typing stop
        let nudgeTimer;
        editor.addEventListener('input', () => {
          edited.textContent = 'Guardando…';
          clearTimeout(nudgeTimer);
          nudgeTimer = setTimeout(()=>{
            edited.textContent = 'Guardado';
            showNudge('¿Cuál es el call‑to‑action concreto para esta pieza?');
          }, 1200);
        }, { once: true });
      }

      function showNudge(text) {
        const n = document.getElementById('aiNudge');
        document.getElementById('aiNudgeText').textContent = text;
        n.classList.remove('hidden');
        n.style.opacity = '0';
        n.style.transform = 'translateY(4px)';
        requestAnimationFrame(()=>{
          n.style.transition = 'opacity 180ms ease, transform 180ms ease';
          n.style.opacity = '1';
          n.style.transform = 'translateY(0px)';
        });
        lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
      }
      function insertNudge() {
        const editor = document.getElementById('editorArea');
        const q = document.getElementById('aiNudgeText').textContent;
        editor.innerHTML += `\n\n&gt; ${q}\n`;
        dismissNudge();
      }
      function regenerateNudge() {
        showNudge('Esboza 3 bullets para un reel con este tema.');
      }
      function dismissNudge() {
        const n = document.getElementById('aiNudge');
        n.style.opacity = '0';
        setTimeout(()=> n.classList.add('hidden'), 120);
      }

      // Attach Plans Modal
      let attachSelected = new Set();
      function openAttachPlansModal() {
        const modal = document.getElementById('attachPlansModal');
        modal.classList.remove('hidden');
        attachSelected = new Set();
        updateAttachFooter();
        renderAttachGrid();
        trapFocus(modal);
      }
      function closeAttachPlansModal() {
        document.getElementById('attachPlansModal').classList.add('hidden');
      }
      function renderAttachGrid() {
        const grid = document.getElementById('attachGrid');
        grid.innerHTML = '';
        const list = plansFull.filter(p=>p.status!=='archived');
        if (list.length===0) {
          document.getElementById('attachEmpty').classList.remove('hidden');
          return;
        }
        list.sort((a,b)=> a.name.localeCompare(b.name));
        list.forEach(p=>{
          const card = document.createElement('button');
          card.className = 'text-left rounded-xl border border-[#E5E5E5] bg-white/60 p-4 hover:shadow-sm';
          card.setAttribute('role','checkbox');
          card.setAttribute('aria-checked', 'false');
          card.onclick = () => toggleAttach(p.id, card);
          card.innerHTML = `
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-2">
                <span class="h-4 w-4 mt-0.5 inline-flex items-center justify-center rounded border border-[#E5E5E5] bg-white">
                  <span class="check hidden h-2.5 w-2.5 rounded-sm bg-[var(--ireal-accent-600)]"></span>
                </span>
                <div>
                  <div class="text-sm" style="font-family:'Inter',sans-serif; font-weight:600">${p.name}</div>
                  <div class="text-xs text-black/60">${p.status==='active'?'activo':p.status} · ${p.startDate||'—'} → ${p.endDate||'—'}</div>
                </div>
              </div>
              <span class="text-xs px-1.5 py-0.5 rounded bg-[var(--ireal-accent-400)]/12">${p.channels.join(', ')||'GEN'}</span>
            </div>
          `;
          grid.appendChild(card);
        });
      }
      function toggleAttach(id, card) {
        if (attachSelected.has(id)) attachSelected.delete(id); else attachSelected.add(id);
        card.setAttribute('aria-checked', attachSelected.has(id) ? 'true' : 'false');
        card.querySelector('.check').classList.toggle('hidden', !attachSelected.has(id));
        updateAttachFooter();
      }
      function updateAttachFooter() {
        const n = attachSelected.size;
        document.getElementById('attachCount').textContent = `Seleccionados: ${n}`;
        const btn = document.getElementById('attachConfirm');
        btn.innerHTML = `<i data-lucide="link-2" class="h-4 w-4" aria-hidden="true"></i> Agregar a ${n} plan(es)`;
        lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
      }
      function confirmAttach() {
        closeAttachPlansModal();
        toast('Agregada a plan(es) ✨');
        // Show chip example
        const chips = document.getElementById('linkedPlansChips');
        chips.className = 'mt-3 flex flex-wrap gap-2';
        chips.innerHTML = Array.from(attachSelected).slice(0,3).map(id=>{
          const p = plansFull.find(x=>x.id===id);
          return `<span class="text-xs px-2 py-1 rounded bg-[var(--ireal-accent-400)]/12 border border-[#E5E5E5]">Vinculada a: ${p?.name||id}</span>`;
        }).join('');
      }
      function toggleQuickCreate(forceOpen=false) {
        const qc = document.getElementById('quickCreate');
        if (!qc) return;
        const isHidden = qc.classList.contains('hidden');
        if (forceOpen === true) {
          qc.classList.remove('hidden');
        } else if (forceOpen === false) {
          qc.classList.add('hidden');
        } else {
          qc.classList.toggle('hidden');
        }
        if (!qc.classList.contains('hidden')) {
          const name = document.getElementById('qcName');
          name && name.focus();
        }
      }

      function createQuickPlan() {
        const name = document.getElementById('qcName').value.trim();
        const goal = document.getElementById('qcGoal').value.trim();
        const start = document.getElementById('qcStart').value || '';
        const end = document.getElementById('qcEnd').value || '';
        if (!name) { toast('Pon un nombre al plan'); return; }
        const id = 'p' + Math.random().toString(36).slice(2,7);
        const newPlan = {
          id, name,
          description: goal || 'Sin objetivo definido.',
          status: 'draft',
          startDate: start, endDate: end,
          channels: ['GEN'],
          progress: { doc: 0, schedule: 0, approvals: 0, overall: 0 }
        };
        plansFull.push(newPlan);
        // Reset fields
        document.getElementById('qcName').value = '';
        document.getElementById('qcGoal').value = '';
        document.getElementById('qcStart').value = '';
        document.getElementById('qcEnd').value = '';
        toggleQuickCreate(false);
        renderAttachGrid();
        renderPlansGrid();
        updateAttachFooter();
        toast('Plan creado ✨');
        sparkle();
      }

      // Plans Grid
      function badgeForStatus(status) {
        const map = {
          active: { text: 'Activo', cls: 'bg-[var(--ireal-accent-400)]/12' },
          draft: { text: 'Borrador', cls: 'bg-black/10' },
          archived: { text: 'Archivado', cls: 'bg-black/10' },
          published: { text: 'Publicado', cls: 'bg-black/10' }
        };
        return map[status] || { text: status, cls: 'bg-black/10' };
      }

      function renderPlansGrid(filterText = '') {
        const grid = document.getElementById('plansGrid');
        if (!grid) return;
        grid.innerHTML = '';
        const q = (filterText || '').toLowerCase();
        const list = plansFull
          .filter(p => p.status !== 'archived')
          .filter(p => !q || p.name.toLowerCase().includes(q) || (p.description||'').toLowerCase().includes(q));

        if (list.length === 0) {
          document.getElementById('plansEmptyState').classList.remove('hidden');
          return;
        }
        document.getElementById('plansEmptyState').classList.add('hidden');

        list.forEach(p => {
          const badge = badgeForStatus(p.status);
          const card = document.createElement('article');
          card.className = 'rounded-xl border border-[#E5E5E5] bg-white/60 p-4 hover:shadow-sm transition-shadow';
          card.innerHTML = `
            <div class="flex items-start justify-between gap-2">
              <h3 class="text-sm leading-5" style="font-family:'Inter',sans-serif; font-weight:600">${p.name}</h3>
              <span class="text-[10px] px-1.5 py-0.5 rounded ${badge.cls}">${badge.text}</span>
            </div>
            <p class="mt-1 text-xs text-black/70 line-clamp-2">${p.description||'—'}</p>
            <div class="mt-3 flex items-center justify-between text-[11px] text-black/60">
              <div class="inline-flex items-center gap-1">
                <i data-lucide="calendar" class="h-3.5 w-3.5"></i>
                <span>${p.startDate || '—'} → ${p.endDate || '—'}</span>
              </div>
              <div class="inline-flex items-center gap-1">
                <i data-lucide="share-2" class="h-3.5 w-3.5"></i>
                <span>${(p.channels||[]).join(', ') || 'GEN'}</span>
              </div>
            </div>
            <div class="mt-3 space-y-1.5">
              <div class="h-1.5 w-full rounded bg-black/10 overflow-hidden">
                <div class="h-full bg-[var(--ireal-accent-300)] transition-all" style="width:${p.progress?.overall ?? 0}%"></div>
              </div>
              <div class="text-[11px] text-black/60">Progreso ${p.progress?.overall ?? 0}% · Doc ${p.progress?.doc ?? 0}% · Agenda ${p.progress?.schedule ?? 0}%</div>
            </div>
            <div class="mt-3 flex items-center justify-end">
              <button class="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-md hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="toast('Próximamente: detalles del plan')">
                <i data-lucide="arrow-right" class="h-3.5 w-3.5"></i>
                Ver detalles
              </button>
            </div>
          `;
          grid.appendChild(card);
        });
        lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
      }

      // Router
      let currentRoute = window.location.pathname + window.location.search;

      function normalizeRoute(path) {
        // remove trailing slashes
        return path.replace(/\/+$/, '') || '/';
      }

      function showRoute(path) {
        currentRoute = normalizeRoute(path);
        const all = Array.from(document.querySelectorAll('.route'));
        const routeMap = {
          '/': 'view-dashboard',
          '/ideas': 'view-ideas',
          '/planes': 'view-planes',
          '/calendario': 'view-calendario'
        };

        // Determine active view
        let targetId = routeMap[currentRoute];
        let isIdeaEditor = false;

        if (!targetId) {
          if (currentRoute.startsWith('/ideas/')) {
            targetId = 'view-idea-editor';
            isIdeaEditor = true;
          } else if (currentRoute.startsWith('/calendario')) {
            targetId = 'view-calendario';
          } else {
            targetId = 'view-dashboard';
          }
        }

        // Animate
        all.forEach(sec => {
          if (sec.id === targetId) {
            sec.classList.remove('pointer-events-none', 'opacity-0');
            sec.style.transform = 'rotateY(0deg)';
            sec.setAttribute('aria-hidden', 'false');
          } else {
            sec.classList.add('pointer-events-none', 'opacity-0');
            sec.style.transform = 'rotateY(-2deg)';
            sec.setAttribute('aria-hidden', 'true');
          }
        });

        // Populate per-view
        if (targetId === 'view-dashboard') loadDashboard();
        if (targetId === 'view-ideas') renderIdeasList();
        if (targetId === 'view-planes') renderPlansGrid(document.getElementById('plansSearch')?.value || '');
        if (isIdeaEditor) {
          const id = currentRoute.split('/ideas/')[1] || 'new';
          loadIdeaEditor(id || 'new');
        }

        updateActiveNav();
        lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
      }

      function navigateTo(path) {
        const url = new URL(path, window.location.origin);
        history.pushState({ path: url.pathname + url.search }, '', url.pathname + url.search);
        showRoute(url.pathname + url.search);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        closeMobileMenu();
      }

      window.addEventListener('popstate', (e) => {
        const path = (e.state && e.state.path) || window.location.pathname + window.location.search;
        showRoute(path);
      });

      function updateActiveNav() {
        const map = [
          { key: 'dashboard', match: (r)=> r === '/' },
          { key: 'ideas', match: (r)=> r === '/ideas' || r.startsWith('/ideas/') },
          { key: 'planes', match: (r)=> r === '/planes' },
          { key: 'calendario', match: (r)=> r.startsWith('/calendario') }
        ];
        document.querySelectorAll('aside [data-nav]').forEach(btn => {
          const key = btn.getAttribute('data-nav');
          const active = map.find(m => m.key === key)?.match(currentRoute);
          btn.classList.toggle('bg-white/10', !!active);
          btn.setAttribute('aria-current', active ? 'page' : 'false');
        });
      }

      // Actions
      function handleCreatePlan() {
        const name = prompt('Nombre del plan');
        if (!name) return;
        const id = 'p' + Math.random().toString(36).slice(2,7);
        const newPlan = {
          id, name,
          description: 'Plan creado rápidamente desde la cabecera.',
          status: 'draft',
          startDate: '', endDate: '',
          channels: ['GEN'],
          progress: { doc: 0, schedule: 0, approvals: 0, overall: 0 }
        };
        plansFull.push(newPlan);
        renderPlansGrid();
        toast('Plan creado ✨');
        sparkle();
        navigateTo('/planes');
      }

      // Mobile Menu
      function openMobileMenu() {
        const m = document.getElementById('mobileMenu');
        m.classList.remove('hidden');
        m.addEventListener('click', (e)=> { if (e.target.id === 'mobileMenu') closeMobileMenu(); }, { once: true });
        trapFocus(m);
      }
      function closeMobileMenu() {
        document.getElementById('mobileMenu').classList.add('hidden');
      }

      // Toast
      let toastTimer;
      function toast(msg = 'Hecho', dur = 1600) {
        const t = document.getElementById('toast');
        t.querySelector('div').textContent = msg;
        t.classList.remove('hidden');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(()=> t.classList.add('hidden'), dur);
      }

      // Sparkles
      function sparkle() {
        const layer = document.getElementById('sparkles');
        layer.classList.remove('hidden');
        const s = document.createElement('div');
        s.className = 'pointer-events-none absolute';
        const size = 6 + Math.random()*8;
        s.style.width = `${size}px`;
        s.style.height = `${size}px`;
        s.style.left = `${Math.random()*100}%`;
        s.style.top = `${Math.random()*40 + 30}%`;
        s.style.borderRadius = '9999px';
        s.style.background = 'radial-gradient(circle at center, rgba(214,103,112,0.9), rgba(214,103,112,0.15) 60%, transparent 70%)';
        s.style.filter = 'blur(0.5px)';
        s.style.opacity = '0';
        s.style.transform = 'translateY(10px)';
        s.style.transition = 'opacity 140ms ease, transform 200ms ease';
        layer.appendChild(s);
        requestAnimationFrame(()=>{
          s.style.opacity = '1';
          s.style.transform = 'translateY(0px)';
        });
        setTimeout(()=>{
          s.style.opacity = '0';
          s.style.transform = 'translateY(-6px)';
          setTimeout(()=> {
            s.remove();
            if (layer.children.length === 0) layer.classList.add('hidden');
          }, 180);
        }, 380);
      }

      // Focus trap (modals/overlays)
      let lastTrapCleanup = null;
      function trapFocus(container) {
        if (!container) return;
        // Cleanup previous
        if (typeof lastTrapCleanup === 'function') lastTrapCleanup();
        const focusableSel = [
          'a[href]', 'button:not([disabled])', 'textarea:not([disabled])',
          'input:not([disabled])', 'select:not([disabled])', '[tabindex]:not([tabindex="-1"])'
        ].join(',');
        const focusables = () => Array.from(container.querySelectorAll(focusableSel))
          .filter(el => el.offsetParent !== null || container === document.getElementById('mobileMenu'));
        const first = ()=> focusables()[0];
        const last = ()=> focusables()[focusables().length - 1];

        const onKey = (e) => {
          if (e.key === 'Escape') {
            // Try common closers
            if (!container.classList.contains('hidden')) {
              if (container.id === 'attachPlansModal') closeAttachPlansModal();
              if (container.id === 'mobileMenu') closeMobileMenu();
            }
          }
          if (e.key === 'Tab') {
            const fs = focusables();
            if (fs.length === 0) return;
            if (e.shiftKey && document.activeElement === first()) {
              e.preventDefault(); last().focus();
            } else if (!e.shiftKey && document.activeElement === last()) {
              e.preventDefault(); first().focus();
            }
          }
        };
        document.addEventListener('keydown', onKey);
        // Auto focus first
        setTimeout(()=> first() && first().focus(), 10);

        lastTrapCleanup = () => document.removeEventListener('keydown', onKey);
      }

      // Filters
      document.addEventListener('DOMContentLoaded', () => {
        const plansSearch = document.getElementById('plansSearch');
        if (plansSearch) {
          plansSearch.addEventListener('input', (e)=> renderPlansGrid(e.target.value));
        }
        const attachSearch = document.getElementById('attachSearch');
        if (attachSearch) {
          attachSearch.addEventListener('input', (e) => {
            const q = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('#attachGrid > button');
            cards.forEach(card => {
              const text = card.textContent.toLowerCase();
              card.classList.toggle('hidden', !text.includes(q));
            });
          });
        }
      });

      // Mobile nav current highlight on load
      document.addEventListener('DOMContentLoaded', () => {
        // Initial renders
        loadDashboard();
        renderIdeasList();
        renderPlansGrid();

        // Start at current URL
        showRoute(window.location.pathname + window.location.search);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="hidden lg:flex fixed inset-y-0 left-0 w-72 bg-[#0E0E0E] text-white flex-col border-r border-white/10">
<div className="px-5 py-5 flex items-center gap-3">
<button className="inline-flex items-center gap-2 group" onclick="navigateTo('/')">
<span className="h-7 w-7 rounded-md bg-white text-black grid place-items-center" style={{fontFamily: '\'Playfair Display\',serif', fontWeight: '600', letterSpacing: '-0.02em'}}>i</span>
<div className="flex flex-col">
<span className="text-[15px] leading-5" style={{fontFamily: '\'Playfair Display\',serif', fontWeight: '600', letterSpacing: '-0.02em'}}>ireal</span>
<span className="text-xs text-white/60 -mt-0.5">Cuaderno de contenidos</span>
</div>
</button>
</div>
<nav className="mt-2 flex-1 px-2 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-1 focus:ring-white/20 text-sm" data-nav="dashboard" onclick="navigateTo('/')">
<i aria-hidden="true" className="h-4.5 w-4.5" data-lucide="layout-dashboard"></i>
<span>Dashboard</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-1 focus:ring-white/20 text-sm" data-nav="ideas" onclick="navigateTo('/ideas')">
<i aria-hidden="true" className="h-4.5 w-4.5" data-lucide="feather"></i>
<span>Ideas</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-1 focus:ring-white/20 text-sm" data-nav="planes" onclick="navigateTo('/planes')">
<i aria-hidden="true" className="h-4.5 w-4.5" data-lucide="file-text"></i>
<span>Planes</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-1 focus:ring-white/20 text-sm" data-nav="calendario" onclick="navigateTo('/calendario')">
<i aria-hidden="true" className="h-4.5 w-4.5" data-lucide="calendar"></i>
<span>Calendario</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-1 focus:ring-white/20 text-sm" data-nav="biblioteca" onclick="toast('Próximamente: Biblioteca')">
<i aria-hidden="true" className="h-4.5 w-4.5" data-lucide="video"></i>
<span>Biblioteca</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-1 focus:ring-white/20 text-sm" data-nav="analytics" onclick="toast('Próximamente: Analytics')">
<i aria-hidden="true" className="h-4.5 w-4.5" data-lucide="bar-chart-3"></i>
<span>Analytics</span>
</button>
</nav>
<div className="mt-auto px-2 py-3 border-t border-white/10">
<button className="w-full flex items-center justify-between gap-3 px-3 py-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-1 focus:ring-white/20 text-sm" onclick="toast('Abrir configuración')">
<span className="inline-flex items-center gap-3">
<i aria-hidden="true" className="h-4.5 w-4.5" data-lucide="settings"></i>
<span>Configuración</span>
</span>
<i aria-hidden="true" className="h-4 w-4" data-lucide="chevron-right"></i>
</button>
</div>
</aside>

<div className="lg:hidden sticky top-0 z-40 border-b border-[#E5E5E5] backdrop-blur-sm bg-[#FDF6EB]/80">
<div className="px-4 py-3 flex items-center justify-between">
<button aria-label="Abrir menú" className="inline-flex items-center gap-2 px-2 py-1 rounded-md hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/10" onclick="openMobileMenu()">
<i className="h-5 w-5" data-lucide="grid"></i>
<span className="text-sm">Menú</span>
</button>
<button className="inline-flex items-center gap-2" onclick="navigateTo('/')">
<span className="h-7 w-7 rounded-md bg-black text-white grid place-items-center" style={{fontFamily: '\'Playfair Display\',serif', fontWeight: '600', letterSpacing: '-0.02em'}}>i</span>
<span className="text-sm" style={{fontFamily: '\'Playfair Display\',serif', fontWeight: '600', letterSpacing: '-0.02em'}}>ireal</span>
</button>
<button aria-label="Abrir ajustes" className="inline-flex items-center gap-2 px-2 py-1 rounded-md hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/10" onclick="toast('Ajustes')">
<i className="h-5 w-5" data-lucide="settings"></i>
<span className="sr-only">Ajustes</span>
</button>
</div>
</div>

<main className="lg:ml-72" id="app">

<div className="relative" id="routeContainer">

<section className="route opacity-0 pointer-events-none [transform:perspective(2000px)] [transform-style:preserve-3d] transition-[transform,opacity] duration-700 ease-[cubic-bezier(.2,.7,.1,1)]" data-route="/" id="view-dashboard">
<header className="max-w-7xl mx-auto px-6 pt-8">
<div className="flex items-start justify-between gap-6">
<div>
<h1 className="text-3xl md:text-4xl tracking-tight" style={{fontFamily: '\'Playfair Display\',serif', fontWeight: '600'}}>Tu página de hoy</h1>
<p className="mt-1 text-black/70 text-sm md:text-base" style={{fontFamily: '\'Inter\',sans-serif', fontWeight: '400'}}>Convierte tu idea en un hechizo de contenido.</p>
</div>
<div className="hidden sm:flex items-center gap-3">
<button className="group relative inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] bg-white/60 px-3.5 py-2 text-sm hover:bg-[var(--ireal-accent-600)] hover:text-white hover:shadow-[0_0_0_6px_rgba(138,15,28,0.10)] hover:ring-1 hover:ring-[var(--ireal-accent-600)]/70 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="handleCreatePlan()">
<i aria-hidden="true" className="h-4.5 w-4.5" data-lucide="file-plus-2"></i>
<span>Crear plan</span>
<span className="absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-black opacity-0 group-hover:opacity-100 transition"></span>
</button>
<button className="group relative inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] bg-white/60 px-3.5 py-2 text-sm hover:bg-[var(--ireal-accent-600)] hover:text-white hover:shadow-[0_0_0_6px_rgba(138,15,28,0.10)] hover:ring-1 hover:ring-[var(--ireal-accent-600)]/70 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="toast('Generar calendario')">
<i aria-hidden="true" className="h-4.5 w-4.5" data-lucide="calendar-cog"></i>
<span>Generar calendario</span>
<span className="absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-black opacity-0 group-hover:opacity-100 transition"></span>
</button>
</div>
</div>
<div className="sm:hidden mt-4 flex items-center gap-3">
<button className="group relative flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-[#E5E5E5] bg-white/60 px-3.5 py-2 text-sm hover:bg-[var(--ireal-accent-600)] hover:text-white hover:shadow-[0_0_0_6px_rgba(138,15,28,0.10)] hover:ring-1 hover:ring-[var(--ireal-accent-600)]/70 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="handleCreatePlan()">
<i aria-hidden="true" className="h-4.5 w-4.5" data-lucide="file-plus-2"></i>
<span>Crear plan</span>
<span className="absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-black opacity-0 group-hover:opacity-100 transition"></span>
</button>
<button className="group relative flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-[#E5E5E5] bg-white/60 px-3.5 py-2 text-sm hover:bg-[var(--ireal-accent-600)] hover:text-white hover:shadow-[0_0_0_6px_rgba(138,15,28,0.10)] hover:ring-1 hover:ring-[var(--ireal-accent-600)]/70 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="toast('Generar calendario')">
<i aria-hidden="true" className="h-4.5 w-4.5" data-lucide="calendar-cog"></i>
<span>Generar calendario</span>
<span className="absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-black opacity-0 group-hover:opacity-100 transition"></span>
</button>
</div>
</header>

<div className="max-w-7xl mx-auto px-6 py-8">
<div className="grid md:grid-cols-3 gap-6">

<section className="rounded-xl border border-[#E5E5E5] bg-white/40 p-5 hover:shadow-sm">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<i aria-hidden="true" className="h-5 w-5" data-lucide="feather"></i>
<h2 className="text-lg tracking-tight" style={{fontFamily: '\'Playfair Display\',serif', fontWeight: '600'}}>Ideas</h2>
</div>
<button className="text-sm underline decoration-black/20 underline-offset-4 hover:text-[var(--ireal-accent-600)] focus:outline-none focus:ring-1 focus:ring-black/20 rounded px-2 py-1" onclick="navigateTo('/ideas')">Ver todo</button>
</div>
<div aria-busy="false" className="mt-4 space-y-3" id="ideasList" role="list"></div>
<div className="hidden mt-4 rounded-md border border-[#E5E5E5] bg-white/50 px-4 py-3" id="ideasEmpty">
<p className="text-sm">Aún no hay ideas. Empieza una ✨</p>
<div className="mt-3">
<button className="group inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] bg-white/60 px-3 py-1.5 text-sm hover:bg-[var(--ireal-accent-600)] hover:text-white hover:shadow-[0_0_0_6px_rgba(138,15,28,0.10)] hover:ring-1 hover:ring-[var(--ireal-accent-600)]/70 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="navigateTo('/ideas/new')">
<i aria-hidden="true" className="h-4 w-4" data-lucide="plus"></i>
<span>+ Nueva idea</span>
</button>
</div>
</div>
<div className="hidden mt-4 text-sm rounded-md border border-[var(--ireal-accent-600)]/70 text-[var(--ireal-accent-600)] bg-[var(--ireal-accent-600)]/8 px-4 py-2 flex items-center justify-between" id="ideasError">
<span>Hubo un error al cargar ideas.</span>
<button className="underline underline-offset-4" onclick="loadDashboard()">Reintentar</button>
</div>
</section>

<section className="rounded-xl border border-[#E5E5E5] bg-white/40 p-5 hover:shadow-sm">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<i aria-hidden="true" className="h-5 w-5" data-lucide="file-text"></i>
<h2 className="text-lg tracking-tight" style={{fontFamily: '\'Playfair Display\',serif', fontWeight: '600'}}>Planes</h2>
</div>
<button className="text-sm underline decoration-black/20 underline-offset-4 hover:text-[var(--ireal-accent-600)] focus:outline-none focus:ring-1 focus:ring-black/20 rounded px-2 py-1" onclick="navigateTo('/planes')">Ver todo</button>
</div>
<div aria-busy="false" className="mt-4 space-y-3" id="plansList" role="list"></div>
<div className="hidden mt-4 text-sm" id="plansEmpty">Crea tu primer plan y el cuaderno cobrará vida ✨</div>
</section>

<section className="rounded-xl border border-[#E5E5E5] bg-white/40 p-5 hover:shadow-sm">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<i aria-hidden="true" className="h-5 w-5" data-lucide="calendar-check-2"></i>
<h2 className="text-lg tracking-tight" style={{fontFamily: '\'Playfair Display\',serif', fontWeight: '600'}}>Publicaciones</h2>
</div>
<button className="text-sm underline decoration-black/20 underline-offset-4 hover:text-[var(--ireal-accent-600)] focus:outline-none focus:ring-1 focus:ring-black/20 rounded px-2 py-1" onclick="navigateTo('/calendario?view=week&amp;focus=today')">Ver todo</button>
</div>
<div aria-live="polite" className="mt-4 space-y-1.5">
<p className="text-sm" id="pubWeek">0 programadas para esta semana</p>
<p className="text-sm" id="pubToday">Hoy tienes 0</p>
</div>
<div className="mt-4">
<button className="inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] bg-white/60 px-3 py-1.5 text-sm hover:bg-[var(--ireal-accent-600)] hover:text-white hover:shadow-[0_0_0_6px_rgba(138,15,28,0.10)] hover:ring-1 hover:ring-[var(--ireal-accent-600)]/70 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="navigateTo('/calendario?view=week&amp;focus=today')">
<i aria-hidden="true" className="h-4 w-4" data-lucide="calendar"></i>
<span>Ir al calendario</span>
</button>
</div>
</section>
</div>

<section className="mt-6 rounded-xl border border-[#E5E5E5] bg-white/40 p-5 hover:shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight" style={{fontFamily: '\'Playfair Display\',serif', fontWeight: '600'}}>Resumen 24–48 h</h3>
<p className="text-sm text-black/60">Así va tu flujo en las próximas 24–48 h</p>
</div>
<div className="mt-4 grid md:grid-cols-3 gap-4">
<div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-black/60"></span>
<h4 className="text-sm font-medium" style={{fontFamily: '\'Inter\',sans-serif', fontWeight: '500'}}>Ayer (Publicadas)</h4>
</div>
<ul className="mt-2 space-y-1.5 text-sm" id="yesterdayList"></ul>
<button className="hidden mt-2 text-xs underline underline-offset-4" id="yesterdayMore">Ver más</button>
</div>
<div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-[var(--ireal-accent-600)]"></span>
<h4 className="text-sm font-medium" style={{fontFamily: '\'Inter\',sans-serif', fontWeight: '500'}}>Hoy (Programadas)</h4>
</div>
<ul className="mt-2 space-y-1.5 text-sm" id="todayList"></ul>
<button className="hidden mt-2 text-xs underline underline-offset-4" id="todayMore">Ver más</button>
</div>
<div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-[var(--ireal-accent-400)]/70"></span>
<h4 className="text-sm font-medium" style={{fontFamily: '\'Inter\',sans-serif', fontWeight: '500'}}>Mañana (Próximas)</h4>
</div>
<ul className="mt-2 space-y-1.5 text-sm" id="tomorrowList"></ul>
<button className="hidden mt-2 text-xs underline underline-offset-4" id="tomorrowMore">Ver más</button>
</div>
</div>
</section>
</div>
</section>

<section className="route opacity-0 pointer-events-none [transform:perspective(2000px)] [transform-style:preserve-3d] transition-[transform,opacity] duration-700 ease-[cubic-bezier(.2,.7,.1,1)]" data-route="/ideas" id="view-ideas">
<div className="max-w-7xl mx-auto px-6 py-8">
<header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div>
<h1 className="text-3xl md:text-4xl tracking-tight" style={{fontFamily: '\'Playfair Display\',serif', fontWeight: '600'}}>Ideas</h1>
<p className="mt-1 text-black/70" style={{fontFamily: '\'Inter\',sans-serif', fontWeight: '400'}}>Apunta chispas. Convierte notas en planes cuando estés listo.</p>
</div>
<div className="flex flex-col sm:flex-row gap-3">
<button className="group relative inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] bg-white/60 px-3.5 py-2 text-sm hover:bg-[var(--ireal-accent-600)] hover:text-white hover:shadow-[0_0_0_6px_rgba(138,15,28,0.10)] hover:ring-1 hover:ring-[var(--ireal-accent-600)]/70 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="navigateTo('/ideas/new')">
<i aria-hidden="true" className="h-4.5 w-4.5" data-lucide="plus"></i>
<span>+ Nueva idea</span>
<span className="absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-black opacity-0 group-hover:opacity-100 transition"></span>
</button>
<div className="flex items-center gap-2">
<div className="relative flex-1">
<i aria-hidden="true" className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-black/50" data-lucide="search"></i>
<input className="w-full sm:w-72 rounded-md border border-[#E5E5E5] bg-transparent px-9 py-2 text-sm placeholder-black/40 focus:outline-none focus:ring-1 focus:ring-black/20" id="ideasSearch" placeholder="Buscar (/)" type="text"/>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] bg-white/60 px-3 py-2 text-sm hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="toast('Filtros')">
<i aria-hidden="true" className="h-4.5 w-4.5" data-lucide="sliders-horizontal"></i>
<span>Filtros</span>
</button>
<button className="inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] bg-white/60 px-3 py-2 text-sm hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="toast('Orden: Más recientes')">
<i aria-hidden="true" className="h-4.5 w-4.5" data-lucide="arrow-up-down"></i>
<span>Ordenar</span>
</button>
</div>
</div>
</header>

<div className="sticky top-[56px] lg:top-4 z-30 mt-4 rounded-xl border border-[#E5E5E5] bg-white/50 p-3 backdrop-blur-sm">
<div className="flex items-center gap-2">
<i aria-hidden="true" className="h-4 w-4 text-black/60" data-lucide="sparkles"></i>
<input className="flex-1 bg-transparent outline-none text-sm" id="quickAddInput" placeholder="Escribe una idea y presiona Enter…" type="text"/>
<button className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-md hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/20" id="quickAddExpand">
<span>Opciones</span>
<i aria-hidden="true" className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
</div>
<div className="hidden mt-3 grid sm:grid-cols-4 gap-2" id="quickAddAdvanced">
<input className="rounded-md border border-[#E5E5E5] bg-transparent px-3 py-2 text-sm placeholder-black/40 focus:outline-none focus:ring-1 focus:ring-black/20" id="qaDesc" placeholder="Descripción breve" type="text"/>
<input className="rounded-md border border-[#E5E5E5] bg-transparent px-3 py-2 text-sm placeholder-black/40 focus:outline-none focus:ring-1 focus:ring-black/20" id="qaTags" placeholder="Tags (coma)" type="text"/>
<select className="rounded-md border border-[#E5E5E5] bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black/20" id="qaChannel">
<option value="">Canal</option>
<option>IG</option>
<option>YT</option>
<option>LI</option>
<option>GEN</option>
</select>
<select className="rounded-md border border-[#E5E5E5] bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black/20" id="qaPriority">
<option value="">Prioridad</option>
<option value="low">Baja</option>
<option value="medium">Media</option>
<option value="high">Alta</option>
</select>
</div>
</div>

<div className="mt-6 space-y-8" id="ideasGroups">

</div>
</div>
</section>

<section className="route opacity-0 pointer-events-none [transform:perspective(2000px)] [transform-style:preserve-3d] transition-[transform,opacity] duration-700 ease-[cubic-bezier(.2,.7,.1,1)]" data-route="/ideas/:id" id="view-idea-editor">
<div className="max-w-4xl mx-auto px-6 py-8">
<div className="flex items-center justify-between">
<button className="inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] bg-white/60 px-3 py-1.5 text-sm hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="navigateTo('/ideas')">
<i aria-hidden="true" className="h-4 w-4" data-lucide="arrow-left"></i>
<span>Volver</span>
</button>
<div className="text-xs text-black/50 flex items-center gap-2">
<span id="ideaEditedAt">Última edición ahora mismo</span>
</div>
</div>
<div className="mt-8">
<h1 aria-label="Título" aria-multiline="true" className="outline-none placeholder:text-black/40 w-full tracking-tight" contenteditable="true" id="ideaTitle" role="textbox" style={{fontFamily: '\'Playfair Display\',serif', fontWeight: '600', fontSize: 'clamp(28px,5vw,44px)'}}>Escribe un título…</h1>
<div className="mt-3 hidden flex-wrap gap-2" id="linkedPlansChips"></div>
<div className="relative mt-6">
<div aria-label="Notas" aria-multiline="true" className="max-w-3xl outline-none text-base leading-7 text-black bg-white/0 min-h-[40vh]" contenteditable="true" id="editorArea" role="textbox">
                  Escribe aquí…
                </div>

<div aria-live="polite" className="hidden absolute -left-2 top-2 inline-flex items-start gap-2 px-3 py-2 rounded-md border border-[#E5E5E5] bg-[#F1E7D7] shadow-sm" id="aiNudge" role="note">
<i aria-hidden="true" className="h-4 w-4 text-black/60" data-lucide="sparkles"></i>
<div className="text-sm text-black/80">
<p id="aiNudgeText">¿Qué evidencia respaldaría esta afirmación?</p>
<div className="mt-1.5 flex items-center gap-3 text-xs text-black/60">
<button className="hover:text-black underline underline-offset-4" onclick="insertNudge()">Insertar</button>
<button className="hover:text-black underline underline-offset-4 hidden sm:inline" onclick="regenerateNudge()">Regenerar</button>
<button className="hover:text-black underline underline-offset-4 hidden sm:inline" onclick="dismissNudge()">Descartar</button>
</div>
</div>
</div>
</div>
</div>

<div className="sticky bottom-0 mt-10 bg-gradient-to-t from-[#FDF6EB] to-[#FDF6EB]/70 backdrop-blur border-t border-[#E5E5E5] py-3" id="addToPlanBar">
<div className="max-w-4xl mx-auto flex items-center justify-end">
<button aria-label="Agregar a plan (Cmd/Ctrl+K)" className="group relative inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] bg-white/60 px-3.5 py-2 text-sm hover:bg-[var(--ireal-accent-600)] hover:text-white hover:shadow-[0_0_0_6px_rgba(138,15,28,0.10)] hover:ring-1 hover:ring-[var(--ireal-accent-600)]/70 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="openAttachPlansModal()">
<i aria-hidden="true" className="h-4.5 w-4.5" data-lucide="link-2"></i>
<span>Agregar a plan</span>
<span className="absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-black opacity-0 group-hover:opacity-100 transition"></span>
</button>
</div>
</div>
</div>
</section>

<section className="route opacity-0 pointer-events-none [transform:perspective(2000px)] [transform-style:preserve-3d] transition-[transform,opacity] duration-700 ease-[cubic-bezier(.2,.7,.1,1)]" data-route="/planes" id="view-planes">
<div className="max-w-7xl mx-auto px-6 py-8">
<header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div>
<h1 className="text-3xl md:text-4xl tracking-tight" style={{fontFamily: '\'Playfair Display\',serif', fontWeight: '600'}}>Planes de contenido</h1>
<p className="mt-1 text-black/70" style={{fontFamily: '\'Inter\',sans-serif', fontWeight: '400'}}>Gestiona campañas y avanza con IA.</p>
</div>
<div className="flex flex-col sm:flex-row gap-3">
<button className="group relative inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] bg-white/60 px-3.5 py-2 text-sm hover:bg-[var(--ireal-accent-600)] hover:text-white hover:shadow-[0_0_0_6px_rgba(138,15,28,0.10)] hover:ring-1 hover:ring-[var(--ireal-accent-600)]/70 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="handleCreatePlan()">
<i aria-hidden="true" className="h-4.5 w-4.5" data-lucide="plus"></i>
<span>+ Crear nuevo plan</span>
<span className="absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-black opacity-0 group-hover:opacity-100 transition"></span>
</button>
<div className="flex items-center gap-2">
<div className="relative">
<i aria-hidden="true" className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-black/50" data-lucide="search"></i>
<input className="w-64 rounded-md border border-[#E5E5E5] bg-transparent px-9 py-2 text-sm placeholder-black/40 focus:outline-none focus:ring-1 focus:ring-black/20" id="plansSearch" placeholder="Buscar planes" type="text"/>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] bg-white/60 px-3 py-2 text-sm hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="toast('Filtros de planes')">
<i aria-hidden="true" className="h-4.5 w-4.5" data-lucide="sliders-horizontal"></i>
<span>Filtros</span>
</button>
</div>
</div>
</header>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" id="plansGrid">

</div>
<div className="hidden mt-8 rounded-xl border border-[#E5E5E5] bg-white/50 p-8 text-center" id="plansEmptyState">
<p className="text-sm">Crea tu primer plan ✨</p>
</div>
</div>
</section>

<section className="route opacity-0 pointer-events-none [transform:perspective(2000px)] [transform-style:preserve-3d] transition-[transform,opacity] duration-700 ease-[cubic-bezier(.2,.7,.1,1)]" data-route="/calendario" id="view-calendario">
<div className="max-w-7xl mx-auto px-6 py-8">
<header className="flex items-center justify-between">
<div>
<h1 className="text-3xl md:text-4xl tracking-tight" style={{fontFamily: '\'Playfair Display\',serif', fontWeight: '600'}}>Calendario</h1>
<p className="mt-1 text-black/70" style={{fontFamily: '\'Inter\',sans-serif', fontWeight: '400'}}>Vista semana — Próximamente drag &amp; drop.</p>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] bg-white/60 px-3 py-1.5 text-sm hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="navigateTo('/')">
<i aria-hidden="true" className="h-4 w-4" data-lucide="corner-up-left"></i>
<span>Volver</span>
</button>
</header>
<div className="mt-6 rounded-xl border border-[#E5E5E5] bg-white/50 p-6">
<div className="grid grid-cols-7 gap-3">

<template id="dayTemplate">
<div className="rounded-lg border border-[#E5E5E5] bg-white/70 p-3 min-h-[120px]">
<div className="flex items-center justify-between">
<span className="text-sm font-medium" style={{fontFamily: '\'Inter\',sans-serif', fontWeight: '500'}}>Lun</span>
<span className="text-xs text-black/50">3 piezas</span>
</div>
<div className="mt-2 space-y-1">
<div className="h-1.5 w-full rounded bg-black/10 overflow-hidden">
<div className="h-full bg-[var(--ireal-accent-300)]" style={{width: '60%'}}></div>
</div>
<div className="text-xs text-black/60">IG Reel, YT Short</div>
</div>
</div>
</template>
<div className="rounded-lg border border-[#E5E5E5] bg-white/70 p-3 min-h-[120px] ring-1 ring-[var(--ireal-accent-600)]/30">
<div className="flex items-center justify-between">
<span className="text-sm font-medium" style={{fontFamily: '\'Inter\',sans-serif', fontWeight: '500'}}>Hoy</span>
<span className="text-xs text-black/50">2 piezas</span>
</div>
<div className="mt-2 space-y-1">
<div className="h-1.5 w-full rounded bg-black/10 overflow-hidden">
<div className="h-full bg-[var(--ireal-accent-300)]" style={{width: '40%'}}></div>
</div>
<div className="text-xs text-black/60">LI Post, IG Carrusel</div>
</div>
</div>
<div className="rounded-lg border border-[#E5E5E5] bg-white/70 p-3 min-h-[120px]"><div className="text-sm font-medium" style={{fontFamily: '\'Inter\',sans-serif', fontWeight: '500'}}>Mar</div></div>
<div className="rounded-lg border border-[#E5E5E5] bg-white/70 p-3 min-h-[120px]"><div className="text-sm font-medium" style={{fontFamily: '\'Inter\',sans-serif', fontWeight: '500'}}>Mié</div></div>
<div className="rounded-lg border border-[#E5E5E5] bg-white/70 p-3 min-h-[120px]"><div className="text-sm font-medium" style={{fontFamily: '\'Inter\',sans-serif', fontWeight: '500'}}>Jue</div></div>
<div className="rounded-lg border border-[#E5E5E5] bg-white/70 p-3 min-h-[120px]"><div className="text-sm font-medium" style={{fontFamily: '\'Inter\',sans-serif', fontWeight: '500'}}>Vie</div></div>
<div className="rounded-lg border border-[#E5E5E5] bg-white/70 p-3 min-h-[120px]"><div className="text-sm font-medium" style={{fontFamily: '\'Inter\',sans-serif', fontWeight: '500'}}>Sáb</div></div>
</div>
</div>
</div>
</section>
</div>
</main>

<div className="hidden fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm" id="mobileMenu">
<div className="absolute inset-x-3 top-16 rounded-2xl border border-[#E5E5E5] bg-white/80 p-4 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="navigateTo('/')">
<i className="h-5 w-5" data-lucide="layout-dashboard"></i><span>Dashboard</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="navigateTo('/ideas')">
<i className="h-5 w-5" data-lucide="feather"></i><span>Ideas</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="navigateTo('/planes')">
<i className="h-5 w-5" data-lucide="file-text"></i><span>Planes</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="navigateTo('/calendario?view=week&amp;focus=today')">
<i className="h-5 w-5" data-lucide="calendar"></i><span>Calendario</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="toast('Ajustes')">
<i className="h-5 w-5" data-lucide="settings"></i><span>Configuración</span>
</button>
<button className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-[#E5E5E5] bg-white/60 px-3 py-2 text-sm hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="closeMobileMenu()">
<i className="h-4 w-4" data-lucide="x"></i> Cerrar
        </button>
</div>
</div>

<div aria-labelledby="dialog-title" aria-modal="true" className="hidden fixed inset-0 z-[70]" id="attachPlansModal" role="dialog">
<div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onclick="closeAttachPlansModal()"></div>
<div className="relative max-w-4xl mx-auto mt-16 rounded-2xl border border-[#E5E5E5] bg-white/70 shadow-lg">
<div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-5 py-4 border-b border-[#E5E5E5] bg-white/70 rounded-t-2xl">
<div className="flex items-center gap-3">
<h3 className="text-xl tracking-tight" id="dialog-title" style={{fontFamily: '\'Playfair Display\',serif', fontWeight: '600'}}>Agregar a…</h3>
<div className="relative">
<i aria-hidden="true" className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-black/50" data-lucide="search"></i>
<input className="w-64 rounded-md border border-[#E5E5E5] bg-transparent px-9 py-2 text-sm placeholder-black/40 focus:outline-none focus:ring-1 focus:ring-black/20" id="attachSearch" placeholder="Buscar (/)" type="text"/>
</div>
</div>
<button className="group inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] bg-white/60 px-3 py-1.5 text-sm hover:bg-[var(--ireal-accent-600)] hover:text-white hover:shadow-[0_0_0_6px_rgba(138,15,28,0.10)] hover:ring-1 hover:ring-[var(--ireal-accent-600)]/70 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="toggleQuickCreate()">
<i aria-hidden="true" className="h-4 w-4" data-lucide="plus"></i>
            Crear nuevo plan
          </button>
</div>

<div className="hidden px-5 py-4 border-b border-[#E5E5E5] bg-white/60" id="quickCreate">
<div className="grid sm:grid-cols-3 gap-3">
<input className="rounded-md border border-[#E5E5E5] bg-transparent px-3 py-2 text-sm placeholder-black/40 focus:outline-none focus:ring-1 focus:ring-black/20" id="qcName" placeholder="Nombre del plan *" type="text"/>
<input className="rounded-md border border-[#E5E5E5] bg-transparent px-3 py-2 text-sm placeholder-black/40 focus:outline-none focus:ring-1 focus:ring-black/20" id="qcGoal" placeholder="Objetivo (opcional)" type="text"/>
<div className="grid grid-cols-2 gap-2">
<input className="rounded-md border border-[#E5E5E5] bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black/20" id="qcStart" type="date"/>
<input className="rounded-md border border-[#E5E5E5] bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black/20" id="qcEnd" type="date"/>
</div>
</div>
<div className="mt-3 flex items-center justify-end">
<button className="group inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] bg-white/60 px-3 py-1.5 text-sm hover:bg-[var(--ireal-accent-600)] hover:text-white hover:shadow-[0_0_0_6px_rgba(138,15,28,0.10)] hover:ring-1 hover:ring-[var(--ireal-accent-600)]/70 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="createQuickPlan()">
<i aria-hidden="true" className="h-4 w-4" data-lucide="sparkles"></i>
              Crear
            </button>
</div>
</div>

<div className="px-5 py-4">
<div className="grid md:grid-cols-3 gap-3" id="attachGrid">

</div>
<div className="hidden text-sm mt-4" id="attachEmpty">No tienes planes activos. <button className="underline underline-offset-4" onclick="toggleQuickCreate(true)">Crear nuevo plan</button></div>
<div className="hidden grid md:grid-cols-3 gap-3 mt-2" id="attachSkeleton">
<div className="rounded-xl border border-[#E5E5E5] bg-black/5 h-24 animate-pulse"></div>
<div className="rounded-xl border border-[#E5E5E5] bg-black/5 h-24 animate-pulse"></div>
<div className="rounded-xl border border-[#E5E5E5] bg-black/5 h-24 animate-pulse"></div>
<div className="rounded-xl border border-[#E5E5E5] bg-black/5 h-24 animate-pulse"></div>
<div className="rounded-xl border border-[#E5E5E5] bg-black/5 h-24 animate-pulse"></div>
<div className="rounded-xl border border-[#E5E5E5] bg-black/5 h-24 animate-pulse"></div>
</div>
</div>
<div className="sticky bottom-0 z-10 flex items-center justify-between px-5 py-3 border-t border-[#E5E5E5] bg-white/70 rounded-b-2xl">
<span className="text-sm" id="attachCount">Seleccionados: 0</span>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] bg-white/60 px-3 py-1.5 text-sm hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-black/20" onclick="closeAttachPlansModal()">Cancelar</button>
<button className="group inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] bg-white/60 px-3 py-1.5 text-sm hover:bg-[var(--ireal-accent-600)] hover:text-white hover:shadow-[0_0_0_6px_rgba(138,15,28,0.10)] hover:ring-1 hover:ring-[var(--ireal-accent-600)]/70 focus:outline-none focus:ring-1 focus:ring-black/20" id="attachConfirm" onclick="confirmAttach()">
<i aria-hidden="true" className="h-4 w-4" data-lucide="link-2"></i>
              Agregar a 0 plan(es)
            </button>
</div>
</div>
</div>
</div>

<div className="pointer-events-none fixed bottom-4 left-1/2 -translate-x-1/2 z-[80] hidden" id="toast">
<div className="rounded-md border border-[#E5E5E5] bg-white/90 px-4 py-2 shadow-sm text-sm">Hecho</div>
</div>

<div className="pointer-events-none fixed inset-0 z-[75] hidden" id="sparkles"></div>


    </>
  );
}
