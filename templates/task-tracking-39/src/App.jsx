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



      // Init icons with stroke-width 1.5
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 }});
      });

      // Simple view switching
      const views = ['team-dashboard', 'kanban', 'person-dashboard', 'create'];
      const titleMap = {
        'team-dashboard': 'Dashboard del equipo',
        'kanban': 'Tareas • Kanban',
        'person-dashboard': 'Dashboard individual',
        'create': 'Crear equipo / tarea',
      };
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const v = btn.getAttribute('data-view');
          views.forEach(id => document.getElementById(id).classList.toggle('hidden', id !== v));
          document.getElementById('view-title').textContent = titleMap[v] || 'Vista';
          document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('bg-gray-900','text-white'));
          btn.classList.add('bg-gray-900','text-white');
          // show layout switch only on kanban
          document.getElementById('layout-switch').classList.toggle('hidden', v !== 'kanban');
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 }});
        });
      });
      document.getElementById('open-create').addEventListener('click', () => {
        document.querySelector('[data-view="create"]').click();
      });

      // Layout switching inside Kanban
      const layoutBtns = document.querySelectorAll('.layout-btn');
      const boardEl = document.getElementById('board');
      const listViewEl = document.getElementById('list-view');
      const calViewEl = document.getElementById('calendar-view');
      layoutBtns.forEach(b => {
        b.addEventListener('click', () => {
          layoutBtns.forEach(x => x.classList.remove('bg-gray-900','text-white'));
          b.classList.add('bg-gray-900','text-white');
          const l = b.getAttribute('data-layout');
          boardEl.classList.toggle('hidden', l !== 'kanban');
          listViewEl.classList.toggle('hidden', l !== 'list');
          calViewEl.classList.toggle('hidden', l !== 'calendar');
        });
      });

      // Assignee pop menu
      const assigneeBtn = document.getElementById('filter-assignee');
      const assigneeMenu = document.getElementById('assignee-menu');
      assigneeBtn?.addEventListener('click', () => {
        assigneeMenu.classList.toggle('hidden');
        assigneeBtn.setAttribute('aria-expanded', !assigneeMenu.classList.contains('hidden'));
      });
      assigneeMenu?.querySelectorAll('[role="option"]').forEach(opt => {
        opt.addEventListener('click', () => {
          assigneeBtn.querySelector('span').lastChild.nodeValue = ' ' + opt.textContent;
          assigneeMenu.classList.add('hidden');
          assigneeBtn.setAttribute('aria-expanded', 'false');
        });
      });

      // Filters popover
      const filtersPopover = document.getElementById('filters-popover');
      document.getElementById('btn-open-filters').addEventListener('click', () => {
        filtersPopover.classList.toggle('hidden');
      });
      document.getElementById('close-filters').addEventListener('click', () => {
        filtersPopover.classList.add('hidden');
      });

      // Form: Task recurring enable
      const chkRecurring = document.getElementById('task-recurring');
      const freqSel = document.getElementById('task-frequency');
      const intInput = document.getElementById('task-interval');
      chkRecurring?.addEventListener('change', () => {
        const en = chkRecurring.checked;
        freqSel.disabled = !en;
        intInput.disabled = !en;
      });

      // Validation: no past date
      const dateInput = document.getElementById('task-date');
      const dateErr = document.getElementById('task-date-error');
      dateInput?.addEventListener('change', () => {
        const sel = new Date(dateInput.value);
        const today = new Date(); today.setHours(0,0,0,0);
        if (dateInput.value && sel < today) {
          dateErr.classList.remove('hidden');
          dateInput.setAttribute('aria-invalid', 'true');
        } else {
          dateErr.classList.add('hidden');
          dateInput.removeAttribute('aria-invalid');
        }
      });

      // Members list (Create team)
      const membersList = document.getElementById('members-list');
      const addMemberBtn = document.getElementById('add-member');
      const memberName = document.getElementById('member-name');
      const memberRole = document.getElementById('member-role');
      const members = [];
      addMemberBtn?.addEventListener('click', () => {
        const name = memberName.value.trim();
        const role = memberRole.value;
        if (!name)          {
            memberName.classList.add('ring-2','ring-rose-300');
            setTimeout(() => memberName.classList.remove('ring-2','ring-rose-300'), 600);
            memberName.focus();
            return;
          }
          members.push({ name, role });
          memberName.value = '';
          renderMembers();
        });
      function renderMembers() {
        if (!members.length) {
          membersList.textContent = 'Sin miembros aún.';
          return;
        }
        membersList.innerHTML = `
          <ul class="flex flex-wrap gap-2">
            ${members.map((m, i) => `
              <li class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white border border-gray-200">
                <span class="text-xs font-medium">${m.name}</span>
                <span class="text-[10px] text-gray-500">• ${m.role}</span>
                <button class="ml-1 p-1 rounded hover:bg-gray-100" aria-label="Quitar miembro" data-remove-member="${i}">
                  <i data-lucide="x" class="w-3.5 h-3.5 text-gray-600"></i>
                </button>
              </li>
            `).join('')}
          </ul>
        `;
        membersList.querySelectorAll('[data-remove-member]').forEach(btn => {
          btn.addEventListener('click', () => {
            const idx = Number(btn.getAttribute('data-remove-member'));
            members.splice(idx, 1);
            renderMembers();
          });
        });
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 }});
      }
      memberName?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          addMemberBtn.click();
        }
      });

      // Toast helper
      function notify(message, variant = 'default') {
        const wrap = document.createElement('div');
        wrap.className = 'fixed inset-0 pointer-events-none z-[60]';
        const el = document.createElement('div');
        el.className = `pointer-events-auto rounded-md border px-3 py-2 text-sm shadow bg-white border-gray-200 text-gray-900 ${variant === 'success' ? 'ring-1 ring-emerald-200' : ''}`;
        el.textContent = message;
        wrap.appendChild(el);
        document.body.appendChild(wrap);
        Object.assign(wrap.style, { display:'grid', placeItems:'end', padding:'16px' });
        el.style.transition = 'transform .2s ease, opacity .2s ease';
        el.style.transform = 'translateY(8px)';
        el.style.opacity = '0';
        requestAnimationFrame(() => {
          el.style.transform = 'translateY(0)';
          el.style.opacity = '1';
        });
        setTimeout(() => {
          el.style.transform = 'translateY(8px)';
          el.style.opacity = '0';
          setTimeout(() => wrap.remove(), 200);
        }, 2200);
      }

      // Dummy integrations
      document.getElementById('btn-sync-gcal')?.addEventListener('click', () => notify('Google Calendar conectado', 'success'));
      document.getElementById('btn-sync-slack')?.addEventListener('click', () => notify('Slack conectado', 'success'));
      document.getElementById('btn-sync-email')?.addEventListener('click', () => notify('Email conectado', 'success'));

      // Kanban: Drag and Drop
      let dragged = null;
      function updateCounts() {
        document.querySelectorAll('[data-column]').forEach(col => {
          const drop = col.querySelector('[data-dropzone]');
          const count = drop?.querySelectorAll('.task-card').length || 0;
          const badge = col.querySelector('.count');
          if (badge) badge.textContent = count;
        });
      }
      function isBlockedCard(el) {
        return el?.dataset.blocked === 'true' || el?.ariaDisabled === 'true';
      }
      function setupDnD() {
        document.querySelectorAll('.task-card[draggable="true"]').forEach(card => {
          card.addEventListener('dragstart', (e) => {
            if (isBlockedCard(card)) {
              e.preventDefault();
              return;
            }
            dragged = card;
            card.classList.add('opacity-70', 'ring-2', 'ring-indigo-200');
            e.dataTransfer.effectAllowed = 'move';
            try { e.dataTransfer.setData('text/plain', card.dataset.id || ''); } catch {}
          });
          card.addEventListener('dragend', () => {
            card.classList.remove('opacity-70', 'ring-2', 'ring-indigo-200');
            dragged = null;
          });
        });
        document.querySelectorAll('[data-dropzone]').forEach(zone => {
          zone.addEventListener('dragover', (e) => {
            if (!dragged || isBlockedCard(dragged)) return;
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            zone.classList.add('ring-2', 'ring-indigo-200', 'bg-indigo-50/30');
          });
          zone.addEventListener('dragleave', () => {
            zone.classList.remove('ring-2', 'ring-indigo-200', 'bg-indigo-50/30');
          });
          zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('ring-2', 'ring-indigo-200', 'bg-indigo-50/30');
            if (!dragged || isBlockedCard(dragged)) return;
            zone.appendChild(dragged);
            const col = zone.closest('[data-column]')?.getAttribute('data-column');
            if (col) {
              dragged.dataset.status = col;
              // If moved out from blocked, normalize style
              if (col !== 'Bloqueada' && dragged.classList.contains('bg-rose-50')) {
                dragged.className = dragged.className
                  .replace('border-rose-300','border-gray-200')
                  .replace('bg-rose-50','bg-white')
                  .replace('hover:border-rose-400','hover:border-gray-300');
                dragged.removeAttribute('data-blocked');
                dragged.setAttribute('draggable', 'true');
              }
            }
            updateCounts();
          });
        });
        updateCounts();
      }
      setupDnD();

      // Task drawer logic
      const drawer = document.getElementById('task-drawer');
      const drawerId = document.getElementById('drawer-task-id');
      const drawerTitle = document.getElementById('drawer-task-title');
      const drawerAssignee = document.getElementById('drawer-assignee');
      const drawerStatus = document.getElementById('drawer-status');
      const btnCloseDrawer = document.getElementById('close-drawer');
      const btnMarkDone = document.getElementById('btn-mark-done');
      const btnMarkBlocked = document.getElementById('btn-mark-blocked');
      const btnExportTask = document.getElementById('btn-export-task');
      let currentTaskEl = null;

      function openDrawerFromCard(card) {
        if (!card) return;
        currentTaskEl = card;
        const id = card.dataset.id || '#T-000';
        const title = card.querySelector('h4')?.textContent?.trim() || 'Tarea';
        const assigneeAlt = card.querySelector('img[alt^="Responsable"]')?.getAttribute('alt') || 'Responsable: —';
        const assignee = assigneeAlt.split(':').pop()?.trim() || '—';
        drawerId.textContent = id;
        drawerTitle.textContent = title;
        drawerAssignee.textContent = assignee;
        drawerStatus.value = card.dataset.status || 'Pendiente';
        drawer.setAttribute('aria-hidden','false');
        drawer.classList.remove('translate-x-full');
        setTimeout(() => {
          // focus close for accessibility
          btnCloseDrawer.focus();
        }, 10);
      }
      function closeDrawer() {
        drawer.classList.add('translate-x-full');
        drawer.setAttribute('aria-hidden','true');
        currentTaskEl = null;
      }
      btnCloseDrawer.addEventListener('click', closeDrawer);
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.getAttribute('aria-hidden') === 'false') closeDrawer();
      });

      // Open task via buttons (event delegation)
      document.addEventListener('click', (e) => {
        const openBtn = e.target.closest('.open-task');
        if (openBtn) {
          e.preventDefault();
          const card = openBtn.closest('.task-card');
          if (card) {
            openDrawerFromCard(card);
          } else {
            // From list row fallback
            const row = openBtn.closest('tr');
            if (row) {
              drawerId.textContent = '#T-—';
              drawerTitle.textContent = row.cells[0]?.textContent?.trim() || 'Tarea';
              drawerAssignee.textContent = row.cells[1]?.textContent?.trim() || '—';
              drawerStatus.value = row.cells[2]?.innerText?.trim() || 'Pendiente';
              drawer.setAttribute('aria-hidden','false');
              drawer.classList.remove('translate-x-full');
            }
          }
        }
      });

      // Change status from drawer updates card and column
      drawerStatus.addEventListener('change', () => {
        const newStatus = drawerStatus.value;
        if (!currentTaskEl) return;
        currentTaskEl.dataset.status = newStatus;
        // Move card to target column
        const targetCol = document.querySelector(`[data-column="${newStatus}"] [data-dropzone]`);
        if (targetCol) {
          targetCol.appendChild(currentTaskEl);
        }
        // If set to Bloqueada -> style as blocked
        if (newStatus === 'Bloqueada') {
          currentTaskEl.dataset.blocked = 'true';
          currentTaskEl.setAttribute('draggable','false');
          currentTaskEl.classList.remove('hover:border-gray-300');
          currentTaskEl.classList.add('border-rose-300','bg-rose-50');
        } else {
          currentTaskEl.dataset.blocked = 'false';
          currentTaskEl.setAttribute('draggable','true');
          currentTaskEl.classList.remove('border-rose-300','bg-rose-50');
          currentTaskEl.classList.add('hover:border-gray-300');
        }
        setupDnD();
        updateCounts();
        notify(`Estado actualizado a ${newStatus}`, 'success');
      });

      btnMarkDone.addEventListener('click', () => {
        drawerStatus.value = 'Hecha';
        drawerStatus.dispatchEvent(new Event('change'));
      });
      btnMarkBlocked.addEventListener('click', () => {
        drawerStatus.value = 'Bloqueada';
        drawerStatus.dispatchEvent(new Event('change'));
      });

      // Export helpers
      function toCSV(rows) {
        return rows.map(r => r.map(v => {
          const s = String(v ?? '');
          if (s.includes(',') || s.includes('"') || s.includes('\n')) {
            return `"${s.replace(/"/g,'""')}"`;
          }
          return s;
        }).join(',')).join('\n');
      }
      function download(filename, content, type = 'text/csv') {
        const blob = new Blob([content], { type });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = filename; a.click();
        URL.revokeObjectURL(url);
      }
      function collectTasks() {
        const rows = [['id','título','estado','responsable','proyecto','prioridad','deadline']];
        document.querySelectorAll('.task-card').forEach(card => {
          const id = card.dataset.id || '';
          const title = card.querySelector('h4')?.textContent?.trim() || '';
          const status = card.dataset.status || '';
          const assignee = card.querySelector('img[alt^="Responsable"]')?.alt?.split(':').pop()?.trim() || '';
          const project = (card.querySelector('p.text-xs')?.textContent || '').replace('Proyecto:','').trim();
          // best-effort for priority and deadline tags
          let priority = '';
          let deadline = '';
          card.querySelectorAll('span.text-[11px]').forEach(tag => {
            const t = tag.textContent.trim().toLowerCase();
            if (['p1','p2','p3'].includes(t)) priority = t.toUpperCase();
            if (t.includes('vence')) deadline = tag.textContent.trim();
          });
          rows.push([id,title,status,assignee,project,priority,deadline]);
        });
        return rows;
      }
      document.getElementById('btn-export')?.addEventListener('click', () => {
        const csv = toCSV(collectTasks());
        download('tareas.csv', csv);
        notify('Exportación iniciada', 'success');
      });
      btnExportTask?.addEventListener('click', () => {
        const id = drawerId.textContent.replace('#','');
        const rows = collectTasks().filter((r, i) => i === 0 || r[0] === drawerId.textContent);
        const csv = toCSV(rows);
        download(`tarea-${id || 'detalle'}.csv`, csv);
        notify('Tarea exportada', 'success');
      });

      // Charts: demo data
      let createdCompletedChart, statusChart, cycleChart, personalChart;
      function initCharts() {
        const ctx1 = document.getElementById('chartCreatedCompleted')?.getContext('2d');
        if (ctx1) {
          createdCompletedChart?.destroy();
          createdCompletedChart = new Chart(ctx1, {
            type: 'line',
            data: {
              labels: ['Sem 1','Sem 2','Sem 3','Sem 4','Sem 5','Sem 6','Sem 7','Sem 8'],
              datasets: [
                { label: 'Creadas', data: [12,14,11,15,18,16,20,18], borderColor: '#6366f1', backgroundColor: 'rgba(99,102,241,0.15)', fill: true, tension: .35, borderWidth: 2 },
                { label: 'Completadas', data: [9,12,10,13,15,15,18,17], borderColor: '#111827', backgroundColor: 'rgba(17,24,39,0.12)', fill: true, tension: .35, borderWidth: 2 }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: true, labels: { boxWidth: 12, boxHeight: 12 } },
                tooltip: { mode: 'index', intersect: false }
              },
              scales: {
                y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.06)' } },
                x: { grid: { display: false } }
              }
            }
          });
        }
        const ctx2 = document.getElementById('chartStatus')?.getContext('2d');
        if (ctx2) {
          statusChart?.destroy();
          statusChart = new Chart(ctx2, {
            type: 'doughnut',
            data: {
              labels: ['Pendiente','En curso','En revisión','Hecha'],
              datasets: [{ data: [6,4,2,10], backgroundColor: ['#374151','#4f46e5','#f59eb','#059669'] }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              cutout: '60%',
              plugins: { legend: { display: false } }
            }
          });
        }
        const ctx3 = document.getElementById('chartCycleTime')?.getContext('2d');
        if (ctx3) {
          cycleChart?.destroy();
          cycleChart = new Chart(ctx3, {
            type: 'bar',
            data: {
              labels: ['Sem 1','Sem 2','Sem 3','Sem 4','Sem 5','Sem 6','Sem 7','Sem 8'],
              datasets: [{ label: 'Días', data: [3.2, 2.8, 2.6, 3.0, 2.9, 2.5, 2.4, 2.7], backgroundColor: '#111827' }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false } },
              scales: {
                y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.06)' } },
                x: { grid: { display: false } }
              }
            }
          });
        }
        const ctx4 = document.getElementById('chartPersonalTrend')?.getContext('2d');
        if (ctx4) {
          personalChart?.destroy();
          personalChart = new Chart(ctx4, {
            type: 'line',
            data: {
              labels: ['1','2','3','4','5','6','7','8'],
              datasets: [
                { label: 'On-time', data: [4,5,4,6,5,6,7,6], borderColor:'#059669', backgroundColor:'rgba(5,150,105,0.15)', fill:true, tension:.35 },
                { label: 'Late', data: [1,1,2,1,2,1,1,1], borderColor:'#f59e0b', backgroundColor:'rgba(245,158,11,0.15)', fill:true, tension:.35 }
              ]
            },
            options: {
              responsive: true, maintainAspectRatio: false,
              plugins: { legend: { display: true } },
              scales: { x: { grid: { display: false } }, y: { beginAtZero: true } }
            }
          });
        }
      }
      window.addEventListener('load', initCharts);

      // Clicking team buttons updates title and notifies
      document.querySelectorAll('[data-team]').forEach(btn => {
        btn.addEventListener('click', () => {
          const team = btn.getAttribute('data-team');
          document.getElementById('view-title').textContent = `Dashboard del equipo • ${team}`;
          notify(`Filtrado por equipo: ${team}`, 'success');
        });
      });

      // Close popover with Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') filtersPopover?.classList.add('hidden');
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
      

<div className="min-h-screen flex">

<aside className="hidden lg:flex lg:w-72 border-r border-gray-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 flex-col">
<div className="h-16 px-5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div aria-label="Logo" className="h-8 w-8 rounded-md bg-indigo-600 text-white flex items-center justify-center text-sm font-semibold tracking-tight">TRK</div>
<span className="text-base font-semibold tracking-tight">Performance</span>
</div>
<button aria-label="Contraer sidebar" className="p-2 rounded-md hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">
<i className="w-5 h-5 text-gray-600" data-lucide="chevrons-left"></i>
</button>
</div>
<div className="px-4">
<label className="sr-only" htmlFor="sidebar-search">Buscar</label>
<div className="relative">
<i className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 py-2 rounded-md border border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none text-sm" id="sidebar-search" placeholder="Buscar..." type="search"/>
</div>
</div>
<nav aria-label="Navegación lateral" className="mt-4 px-3 flex-1 overflow-y-auto">
<div className="px-1 text-xs font-medium text-gray-500 uppercase tracking-wide">Equipos</div>
<ul className="mt-2 space-y-1">
<li>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 group" data-team="Plataforma">
<span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold flex items-center justify-center">P</span>
<span className="flex-1 text-sm">Plataforma</span>
<span className="text-[11px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-700">24</span>
</button>
</li>
<li>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 group" data-team="Producto">
<span className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold flex items-center justify-center">Pd</span>
<span className="flex-1 text-sm">Producto</span>
<span className="text-[11px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-700">18</span>
</button>
</li>
<li>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 group" data-team="Datos">
<span className="h-6 w-6 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold flex items-center justify-center">D</span>
<span className="flex-1 text-sm">Datos</span>
<span className="text-[11px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-700">12</span>
</button>
</li>
</ul>
<div className="mt-6 px-1 text-xs font-medium text-gray-500 uppercase tracking-wide">Proyectos</div>
<ul className="mt-2 space-y-1">
<li>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">
<i className="w-4 h-4 text-gray-600" data-lucide="layers"></i>
<span className="flex-1 text-sm">Mobile v3</span>
</button>
</li>
<li>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">
<i className="w-4 h-4 text-gray-600" data-lucide="layers"></i>
<span className="flex-1 text-sm">Onboarding UX</span>
</button>
</li>
<li>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">
<i className="w-4 h-4 text-gray-600" data-lucide="layers"></i>
<span className="flex-1 text-sm">Data Pipeline</span>
</button>
</li>
</ul>
<div className="mt-6">
<button className="w-full inline-flex items-center justify-center gap-2 text-sm font-medium bg-gray-900 text-white px-3 py-2 rounded-md hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600" id="open-create">
<i className="w-4 h-4" data-lucide="plus"></i>
              Nuevo equipo / tarea
            </button>
</div>
<div className="mt-8 border-t border-gray-200 pt-4">
<div className="px-1 text-xs font-medium text-gray-500 uppercase tracking-wide">Integraciones</div>
<div className="mt-2 space-y-2">
<div className="flex items-center justify-between px-3 py-2 rounded-md border border-gray-200">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-gray-600" data-lucide="calendar"></i>
<span className="text-sm">Google Calendar</span>
</div>
<button className="text-xs px-2 py-1 rounded bg-indigo-50 text-indigo-700 hover:bg-indigo-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600" id="btn-sync-gcal">Conectar</button>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-md border border-gray-200">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-gray-600" data-lucide="slack"></i>
<span className="text-sm">Slack</span>
</div>
<button className="text-xs px-2 py-1 rounded bg-indigo-50 text-indigo-700 hover:bg-indigo-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600" id="btn-sync-slack">Conectar</button>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-md border border-gray-200">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-gray-600" data-lucide="mail"></i>
<span className="text-sm">Email</span>
</div>
<button className="text-xs px-2 py-1 rounded bg-indigo-50 text-indigo-700 hover:bg-indigo-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600" id="btn-sync-email">Conectar</button>
</div>
</div>
</div>
</nav>
<div className="mt-auto p-4 border-t border-gray-200">
<div className="flex items-center gap-3">
<img alt="Avatar" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">María González</div>
<div className="text-xs text-gray-500">Manager • Plataforma</div>
</div>
<button aria-label="Ajustes" className="ml-auto p-2 rounded-md hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">
<i className="w-4 h-4 text-gray-600" data-lucide="settings"></i>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col">

<header className="h-16 border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 px-4 lg:px-6 flex items-center gap-3">
<button aria-label="Abrir menú" className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">
<i className="w-5 h-5 text-gray-700" data-lucide="menu"></i>
</button>
<div className="flex-1 flex items-center gap-3">
<h1 className="text-[20px] md:text-[22px] font-semibold tracking-tight" id="view-title">Dashboard del equipo</h1>
<div className="hidden md:flex items-center gap-2 ml-2">
<span className="px-2 py-1 rounded bg-green-50 text-green-700 text-xs border border-green-200">SLA 92%</span>
<span className="px-2 py-1 rounded bg-amber-50 text-amber-700 text-xs border border-amber-200">Overdue 8%</span>
</div>
</div>
<div className="hidden md:flex items-center gap-2">
<div className="relative">
<i className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search"></i>
<input className="w-64 pl-9 pr-3 py-2 rounded-md border border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none text-sm" placeholder="Buscar tareas, personas..." type="search"/>
</div>
<button aria-label="Filtros" className="p-2 rounded-md hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600" id="btn-open-filters">
<i className="w-5 h-5 text-gray-700" data-lucide="filter"></i>
</button>
<button aria-label="Notificaciones" className="p-2 rounded-md hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">
<i className="w-5 h-5 text-gray-700" data-lucide="bell"></i>
</button>
<button className="inline-flex items-center gap-2 text-sm font-medium bg-gray-900 text-white px-3 py-2 rounded-md hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600" id="btn-export">
<i className="w-4 h-4" data-lucide="download"></i> Exportar
            </button>
</div>
</header>

<div className="px-4 lg:px-6 py-3 border-b border-gray-200 bg-white">
<div className="flex flex-wrap items-center gap-2">
<div aria-label="Cambiar vista" className="flex rounded-md border border-gray-200 overflow-hidden" role="tablist">
<button className="tab-btn px-3 py-1.5 text-sm bg-gray-900 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600" data-view="team-dashboard">Equipo</button>
<button className="tab-btn px-3 py-1.5 text-sm hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600" data-view="kanban">Kanban</button>
<button className="tab-btn px-3 py-1.5 text-sm hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600" data-view="person-dashboard">Individual</button>
<button className="tab-btn px-3 py-1.5 text-sm hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600" data-view="create">Crear</button>
</div>

<div className="hidden md:flex items-center gap-1 ml-auto" id="layout-switch">
<span className="text-xs text-gray-500">Vista</span>
<div className="flex rounded-md border border-gray-200 overflow-hidden">
<button className="layout-btn px-2.5 py-1.5 text-sm bg-gray-900 text-white" data-layout="kanban">Kanban</button>
<button className="layout-btn px-2.5 py-1.5 text-sm hover:bg-gray-100" data-layout="list">Lista</button>
<button className="layout-btn px-2.5 py-1.5 text-sm hover:bg-gray-100" data-layout="calendar">Calendario</button>
</div>
</div>
</div>

<div className="mt-3 grid grid-cols-1 md:grid-cols-4 gap-2" id="filters">
<div>
<label className="block text-xs text-gray-500">Responsable</label>
<button aria-expanded="false" aria-haspopup="listbox" className="w-full flex items-center justify-between px-3 py-2 rounded-md border border-gray-200 bg-white text-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600" id="filter-assignee">
<span className="flex items-center gap-2">
<i className="w-4 h-4 text-gray-600" data-lucide="user"></i> Todos
                </span>
<i className="w-4 h-4 text-gray-600" data-lucide="chevron-down"></i>
</button>
<ul className="hidden mt-1 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden" id="assignee-menu" role="listbox" tabindex="-1">
<li className="px-3 py-2 hover:bg-gray-50 cursor-pointer text-sm" role="option">Todos</li>
<li className="px-3 py-2 hover:bg-gray-50 cursor-pointer text-sm" role="option">María</li>
<li className="px-3 py-2 hover:bg-gray-50 cursor-pointer text-sm" role="option">Javier</li>
<li className="px-3 py-2 hover:bg-gray-50 cursor-pointer text-sm" role="option">Lucía</li>
</ul>
</div>
<div>
<label className="block text-xs text-gray-500">Proyecto</label>
<button className="w-full flex items-center justify-between px-3 py-2 rounded-md border border-gray-200 bg-white text-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600" id="filter-project">
<span className="flex items-center gap-2"><i className="w-4 h-4 text-gray-600" data-lucide="folder"></i> Todos</span>
<i className="w-4 h-4 text-gray-600" data-lucide="chevron-down"></i>
</button>
</div>
<div>
<label className="block text-xs text-gray-500">Estado</label>
<button className="w-full flex items-center justify-between px-3 py-2 rounded-md border border-gray-200 bg-white text-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600" id="filter-status">
<span className="flex items-center gap-2"><i className="w-4 h-4 text-gray-600" data-lucide="check-circle"></i> Todos</span>
<i className="w-4 h-4 text-gray-600" data-lucide="chevron-down"></i>
</button>
</div>
<div>
<label className="block text-xs text-gray-500">Rango de fechas</label>
<div className="flex gap-2">
<input className="w-full px-3 py-2 rounded-md border border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none text-sm bg-white" type="date"/>
<input className="w-full px-3 py-2 rounded-md border border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none text-sm bg-white" type="date"/>
</div>
</div>
</div>
</div>

<section className="view px-4 lg:px-6 py-6 space-y-6" id="team-dashboard">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="bg-white border border-gray-200 rounded-lg p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-gray-500">Tareas creadas</p>
<i className="w-4 h-4 text-gray-500" data-lucide="plus-circle"></i>
</div>
<p className="mt-1 text-2xl font-semibold tracking-tight">124</p>
<p className="text-xs text-gray-500 mt-1"><span className="text-emerald-600 font-medium">+12%</span> vs. mes anterior</p>
</div>
<div className="bg-white border border-gray-200 rounded-lg p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-gray-500">Tareas completadas</p>
<i className="w-4 h-4 text-gray-500" data-lucide="check-circle-2"></i>
</div>
<p className="mt-1 text-2xl font-semibold tracking-tight">109</p>
<p className="text-xs text-gray-500 mt-1"><span className="text-emerald-600 font-medium">+9%</span> vs. mes anterior</p>
</div>
<div className="bg-white border border-gray-200 rounded-lg p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-gray-500">% vencidas</p>
<i className="w-4 h-4 text-gray-500" data-lucide="alarm-clock"></i>
</div>
<p className="mt-1 text-2xl font-semibold tracking-tight">8%</p>
<p className="text-xs text-gray-500 mt-1"><span className="text-rose-600 font-medium">+2%</span> vs. mes anterior</p>
</div>
<div className="bg-white border border-gray-200 rounded-lg p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-gray-500">Tiempo promedio</p>
<i className="w-4 h-4 text-gray-500" data-lucide="timer"></i>
</div>
<p className="mt-1 text-2xl font-semibold tracking-tight">2.7d</p>
<p className="text-xs text-gray-500 mt-1"><span className="text-emerald-600 font-medium">-0.3d</span> vs. mes anterior</p>
</div>
</div>

<div className="grid grid-cols-1 2xl:grid-cols-3 gap-4">
<div className="bg-white border border-gray-200 rounded-lg p-4 2xl:col-span-2">
<div className="flex items-center justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight">Creadas vs Completadas</h2>
<p className="text-sm text-gray-500">Últimas 8 semanas</p>
</div>
<button className="px-2.5 py-1.5 rounded-md text-sm border border-gray-200 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">
<i className="w-4 h-4 inline -mt-0.5 mr-1" data-lucide="calendar"></i> Últ. 8 sem
                </button>
</div>
<div className="mt-4">
<div className="relative h-64">
<div className="absolute inset-0">
<div className="h-full">
<div className="h-full">
<canvas aria-label="Gráfico de líneas Creadas vs Completadas" id="chartCreatedCompleted" role="img"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-lg p-4">
<div className="flex items-center justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight">Distribución de estados</h2>
<p className="text-sm text-gray-500">Semana actual</p>
</div>
</div>
<div className="mt-4">
<div className="relative h-64">
<div className="absolute inset-0">
<div className="h-full">
<div className="h-full">
<canvas aria-label="Gráfico de donut por estado" id="chartStatus" role="img"></canvas>
</div>
</div>
</div>
</div>
</div>
<div className="mt-3 grid grid-cols-2 gap-2 text-sm">
<div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-gray-700"></span>Pendiente</div>
<div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-indigo-600"></span>En curso</div>
<div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-amber-500"></span>En revisión</div>
<div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-emerald-600"></span>Hecha</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
<div className="bg-white border border-gray-200 rounded-lg p-4">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight">Colaboración</h2>
<i className="w-4 h-4 text-gray-500" data-lucide="users"></i>
</div>
<div className="mt-3 grid grid-cols-3 gap-3">
<div className="p-3 rounded-md border border-gray-200">
<p className="text-xs text-gray-500">Comentarios</p>
<p className="text-xl font-semibold tracking-tight mt-1">86</p>
</div>
<div className="p-3 rounded-md border border-gray-200">
<p className="text-xs text-gray-500">Asignaciones cruzadas</p>
<p className="text-xl font-semibold tracking-tight mt-1">14</p>
</div>
<div className="p-3 rounded-md border border-gray-200">
<p className="text-xs text-gray-500">Revisiones</p>
<p className="text-xl font-semibold tracking-tight mt-1">29</p>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-lg p-4 xl:col-span-2">
<div className="flex items-center justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight">Tiempo promedio de resolución</h2>
<p className="text-sm text-gray-500">Comparativa semanal</p>
</div>
</div>
<div className="mt-4">
<div className="relative h-64">
<div className="absolute inset-0">
<div className="h-full">
<div className="h-full">
<canvas aria-label="Gráfico de barras tiempo promedio" id="chartCycleTime" role="img"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="view hidden px-4 lg:px-6 py-6 space-y-4" id="kanban">

<div className="flex flex-wrap items-center gap-2">
<span className="text-xs px-2 py-1 rounded bg-rose-50 text-rose-700 border border-rose-200">Bloqueada</span>
<span className="text-xs px-2 py-1 rounded bg-amber-50 text-amber-700 border border-amber-200">Vence pronto</span>
<span className="text-xs px-2 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">Recurrente</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-5 gap-4" id="board">

<div aria-label="Columna Pendiente" className="bg-white border border-gray-200 rounded-lg p-3 flex flex-col" data-column="Pendiente">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Pendiente</h3>
<span className="text-xs text-gray-500"><span className="count">3</span></span>
</div>
<div className="mt-2 space-y-2 min-h-[120px]" data-dropzone="">

<article aria-grabbed="false" className="task-card border border-gray-200 rounded-lg p-3 bg-white hover:border-gray-300 cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-indigo-600" data-id="T-101" data-status="Pendiente" draggable="true" tabindex="0">
<div className="flex items-start justify-between">
<h4 className="text-sm font-medium">Definir esquema de datos v2</h4>
<button aria-label="Abrir tarea" className="p-1 rounded hover:bg-gray-100 open-task">
<i className="w-4 h-4 text-gray-600" data-lucide="square-arrow-out-up-right"></i>
</button>
</div>
<p className="text-xs text-gray-500 mt-1">Proyecto: Data Pipeline</p>
<div className="mt-2 flex items-center gap-2">
<span className="text-[11px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-700 border border-gray-200">#Datos</span>
<span className="text-[11px] px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">vence hoy</span>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="Responsable: Javier" className="h-6 w-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<img alt="Revisor: Lucía" className="h-6 w-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs text-gray-500">#T-101</span>
</div>
</article>
<article aria-grabbed="false" className="task-card border border-gray-200 rounded-lg p-3 bg-white hover:border-gray-300 cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-indigo-600" data-id="T-102" data-status="Pendiente" draggable="true" tabindex="0">
<div className="flex items-start justify-between">
<h4 className="text-sm font-medium">Especificación API auth</h4>
<button aria-label="Abrir tarea" className="p-1 rounded hover:bg-gray-100 open-task">
<i className="w-4 h-4 text-gray-600" data-lucide="square-arrow-out-up-right"></i>
</button>
</div>
<p className="text-xs text-gray-500 mt-1">Proyecto: Plataforma</p>
<div className="mt-2 flex items-center gap-2">
<span className="text-[11px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-700 border border-gray-200">P1</span>
<span className="text-[11px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">recurrente</span>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="Responsable: María" className="h-6 w-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs text-gray-500">#T-102</span>
</div>
</article>
<article aria-grabbed="false" className="task-card border border-gray-200 rounded-lg p-3 bg-white hover:border-gray-300 cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-indigo-600" data-id="T-103" data-status="Pendiente" draggable="true" tabindex="0">
<div className="flex items-start justify-between">
<h4 className="text-sm font-medium">Auditoría de accesibilidad</h4>
<button aria-label="Abrir tarea" className="p-1 rounded hover:bg-gray-100 open-task">
<i className="w-4 h-4 text-gray-600" data-lucide="square-arrow-out-up-right"></i>
</button>
</div>
<p className="text-xs text-gray-500 mt-1">Proyecto: Onboarding UX</p>
<div className="mt-2 flex items-center gap-2">
<span className="text-[11px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-700 border border-gray-200">P2</span>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="Responsable: Ana" className="h-6 w-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs text-gray-500">#T-103</span>
</div>
</article>
</div>
<button className="mt-3 text-sm text-indigo-700 hover:text-indigo-900 inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="plus"></i> Nueva tarea
              </button>
</div>

<div aria-label="Columna En curso" className="bg-white border border-gray-200 rounded-lg p-3 flex flex-col" data-column="En curso">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">En curso</h3>
<span className="text-xs text-gray-500"><span className="count">2</span></span>
</div>
<div className="mt-2 space-y-2 min-h-[120px]" data-dropzone="">
<article className="task-card border border-gray-200 rounded-lg p-3 bg-white hover:border-gray-300 cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-indigo-600" data-id="T-104" data-status="En curso" draggable="true" tabindex="0">
<div className="flex items-start justify-between">
<h4 className="text-sm font-medium">Implementar cache de consultas</h4>
<button aria-label="Abrir tarea" className="p-1 rounded hover:bg-gray-100 open-task">
<i className="w-4 h-4 text-gray-600" data-lucide="square-arrow-out-up-right"></i>
</button>
</div>
<p className="text-xs text-gray-500 mt-1">Proyecto: Plataforma</p>
<div className="mt2 flex items-center gap-2">
<span className="text-[11px] px-1.5 py-0.5 rounded-gray-100 text-gray-700 border border-gray-200">P1</span>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="Responsable: Lucía" className="h-6 w-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs text-gray-500">#T-104</span>
</div>
</article>
<article aria-disabled="true" className="task-card border border-rose-300 rounded-lg p-3 bg-rose-50 hover:border-rose-400 cursor-not-allowed opacity-90" data-blocked="true" data-id="T-105" data-status="Bloqueada" draggable="true" tabindex="0" title="Tarea bloqueada">
<div className="flex items-start justify-between">
<h4 className="text-sm font-medium text-rose-900">Refactor módulo pagos</h4>
<span className="text-[11px] px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 border border-rose-200">bloqueada</span>
</div>
<p className="text-xs text-rose-800 mt-1">Esperando credenciales</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="Responsable: María" className="h-6 w-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs text-rose-800">#T-105</span>
</div>
</article>
</div>
</div>

<div aria-label="Columna En revisión" className="bg-white border border-gray-200 rounded-lg p-3 flex flex-col" data-column="En revisión">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">En revisión</h3>
<span className="text-xs text-gray-500"><span className="count">1</span></span>
</div>
<div className="mt-2 space-y-2 min-h-[120px]" data-dropzone="">
<article className="task-card border border-gray-200 rounded-lg p-3 bg-white hover:border-gray-300 cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-indigo-600" data-id="T-106" data-status="En revisión" draggable="true" tabindex="0">
<div className="flex items-start justify-between">
<h4 className="text-sm font-medium">QA flujo de registro</h4>
<button aria-label="Abrir tarea" className="p-1 rounded hover:bg-gray-100 open-task">
<i className="w-4 h-4 text-gray-600" data-lucide="square-arrow-out-up-right"></i>
</button>
</div>
<p className="text-xs text-gray-500 mt-1">Proyecto: Onboarding UX</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="Responsable: Ana" className="h-6 w-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs text-gray-500">#T-106</span>
</div>
</article>
</div>
</div>

<div aria-label="Columna Hecha" className="bg-white border border-gray-200 rounded-lg p-3 flex flex-col" data-column="Hecha">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Hecha</h3>
<span className="text-xs text-gray-500"><span className="count">2</span></span>
</div>
<div className="mt-2 space-y-2 min-h-[120px]" data-dropzone="">
<article className="task-card border border-gray-200 rounded-lg p-3 bg-white hover:border-gray-300 cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-indigo-600" data-id="T-107" data-status="Hecha" draggable="true" tabindex="0">
<div className="flex items-start justify-between">
<h4 className="text-sm font-medium">Migración Node 18</h4>
<button aria-label="Abrir tarea" className="p-1 rounded hover:bg-gray-100 open-task">
<i className="w-4 h-4 text-gray-600" data-lucide="square-arrow-out-up-right"></i>
</button>
</div>
<p className="text-xs text-gray-500 mt-1">Proyecto: Plataforma</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="Responsable: Lucía" className="h-6 w-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs text-gray-500">#T-107</span>
</div>
</article>
<article className="task-card border border-gray-200 rounded-lg p-3 bg-white hover:border-gray-300 cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-indigo-600" data-id="T-108" data-status="Hecha" draggable="true" tabindex="0">
<div className="flex items-start justify-between">
<h4 className="text-sm font-medium">Definir OKRs Q3</h4>
<button aria-label="Abrir tarea" className="p-1 rounded hover:bg-gray-100 open-task">
<i className="w-4 h-4 text-gray-600" data-lucide="square-arrow-out-up-right"></i>
</button>
</div>
<p className="text-xs text-gray-500 mt-1">Proyecto: Producto</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="Responsable: Javier" className="h-6 w-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs text-gray-500">#T-108</span>
</div>
</article>
</div>
</div>

<div aria-label="Columna Bloqueada" className="bg-white border border-gray-200 rounded-lg p-3 flex flex-col" data-column="Bloqueada">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Bloqueada</h3>
<span className="text-xs text-gray-500"><span className="count">1</span></span>
</div>
<div className="mt-2 space-y-2 min-h-[120px]" data-dropzone="">
<article aria-disabled="true" className="border border-rose-300 rounded-lg p-3 bg-rose-50 opacity-90" data-id="T-109" data-status="Bloqueada" draggable="false">
<div className="flex items-start justify-between">
<h4 className="text-sm font-medium text-rose-900">Reporte de auditoría</h4>
<span className="text-[11px] px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 border border-rose-200">bloqueada</span>
</div>
<p className="text-xs text-rose-800 mt-1">Dependencia externa</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="Responsable: Ana" className="h-6 w-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs text-rose-800">#T-109</span>
</div>
</article>
</div>
</div>
</div>

<div className="hidden bg-white border border-gray-200 rounded-lg overflow-hidden" id="list-view">
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-gray-50 border-b border-gray-200">
<tr>
<th className="text-left px-4 py-2 font-medium">Tarea</th>
<th className="text-left px-4 py-2 font-medium">Responsable</th>
<th className="text-left px-4 py-2 font-medium">Estado</th>
<th className="text-left px-4 py-2 font-medium">Prioridad</th>
<th className="text-left px-4 py-2 font-medium">Fecha límite</th>
<th className="text-left px-4 py-2 font-medium">Proyecto</th>
<th className="px-4 py-2"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200">
<tr>
<td className="px-4 py-2">Definir esquema de datos v2</td>
<td className="px-4 py-2">Javier</td>
<td className="px-4 py-2"><span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700 border border-gray-200">Pendiente</span></td>
<td className="px-4 py-2">P1</td>
<td className="px-4 py-2">Hoy</td>
<td className="px-4 py-2">Data Pipeline</td>
<td className="px-4 py-2 text-right">
<button aria-label="Abrir tarea" className="p-1.5 rounded hover:bg-gray-100 open-task"><i className="w-4 h-4 text-gray-600" data-lucide="square-arrow-out-up-right"></i></button>
</td>
</tr>
<tr>
<td className="px-4 py-2">QA flujo de registro</td>
<td className="px-4 py-2">Ana</td>
<td className="px-4 py-2"><span className="text-xs px-2 py-1 rounded bg-amber-50 text-amber-700 border border-amber-200">En revisión</span></td>
<td className="px-4 py-2">P2</td>
<td className="px-4 py-2">Mañana</td>
<td className="px-4 py-2">Onboarding UX</td>
<td className="px-4 py-2 text-right">
<button aria-label="Abrir tarea" className="p-1.5 rounded hover:bg-gray-100 open-task"><i className="w-4 h-4 text-gray-600" data-lucide="square-arrow-out-up-right"></i></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="hidden bg-white border border-gray-200 rounded-lg p-4" id="calendar-view">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Calendario • Junio</h3>
<div className="flex items-center gap-2">
<button aria-label="Mes anterior" className="p-1.5 rounded border border-gray-200 hover:bg-gray-50"><i className="w-4 h-4" data-lucide="chevron-left"></i></button>
<button aria-label="Mes siguiente" className="p-1.5 rounded border border-gray-200 hover:bg-gray-50"><i className="w-4 h-4" data-lucide="chevron-right"></i></button>
</div>
</div>
<div className="mt-3 grid grid-cols-7 gap-2 text-xs">
<div className="text-gray-500">Lun</div><div className="text-gray-500">Mar</div><div className="text-gray-500">Mié</div><div className="text-gray-500">Jue</div><div className="text-gray-500">Vie</div><div className="text-gray-500">Sáb</div><div className="text-gray-500">Dom</div>
</div>
<div className="mt-2 grid grid-cols-7 gap-2">

<div className="border border-gray-200 rounded p-2 h-24 text-xs">1</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">2</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">3</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">4</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">5 <div className="mt-1 px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">Esquema datos</div></div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">6</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">7</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">8</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">9</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">10</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">11</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">12</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">13</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">14</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">15 <div className="mt-1 px-1.5 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">Refactor pagos</div></div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">16</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">17</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">18</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">19</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">20</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">21</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">22</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">23</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">24</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">25</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">26</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">27</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">28</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">29</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">30</div>
<div className="border border-gray-200 rounded p-2 h-24 text-xs">31</div>
</div>
</div>
</section>

<section className="view hidden px-4 lg:px-6 py-6 space-y-6" id="person-dashboard">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-white border border-gray-200 rounded-lg p-4 md:col-span-1">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight">Resumen individual</h2>
<button className="p-1.5 rounded border border-gray-200 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">
<i className="w-4 h-4" data-lucide="download"></i>
</button>
</div>
<div className="mt-3 flex items-center gap-3">
<img alt="Lucía" className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Lucía Fernández</div>
<div className="text-xs text-gray-500">Backend</div>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="p-3 rounded-md border border-gray-200">
<p className="text-xs text-gray-500">Completadas</p>
<p className="text-xl font-semibold tracking-tight mt-1">34</p>
</div>
<div className="p-3 rounded-md border border-gray-200">
<p className="text-xs text-gray-500">En curso</p>
<p className="text-xl font-semibold tracking-tight mt-1">5</p>
</div>
<div className="p-3 rounded-md border border-gray-200">
<p className="text-xs text-gray-500">Bloqueadas</p>
<p className="text-xl font-semibold tracking-tight mt-1 text-rose-600">1</p>
</div>
</div>
<div className="mt-4 p-3 rounded-md border border-gray-200 bg-gray-50">
<p className="text-xs text-gray-500">Cumplimiento de deadlines</p>
<div className="mt-1 flex items-center gap-2">
<div className="h-2 flex-1 bg-gray-200 rounded overflow-hidden">
<div className="h-full bg-emerald-600" style={{width: '86%'}}></div>
</div>
<span className="text-xs font-medium">86%</span>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-lg p-4 md:col-span-2">
<div className="flex items-center justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight">Tendencias personales</h2>
<p className="text-sm text-gray-500">On-time vs Late • 8 semanas</p>
</div>
</div>
<div className="mt-3">
<div className="relative h-64">
<div className="absolute inset-0">
<div className="h-full">
<div className="h-full">
<canvas aria-label="Gráfico de líneas individual" id="chartPersonalTrend" role="img"></canvas>
</div>
</div>
</div>
</div>
</div>
<div className="mt-6">
<h3 className="text-base font-semibold tracking-tight">Ranking por estado</h3>
<div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="p-3 rounded-md border border-gray-200">
<p className="text-xs text-gray-500">En curso</p>
<p className="text-xl font-semibold tracking-tight mt-1">5</p>
</div>
<div className="p-3 rounded-md border border-gray-200">
<p className="text-xs text-gray-500">Bloqueadas</p>
<p className="text-xl font-semibold tracking-tight mt-1 text-rose-600">1</p>
</div>
<div className="p-3 rounded-md border border-gray-200">
<p className="text-xs text-gray-500">Entregadas</p>
<p className="text-xl font-semibold tracking-tight mt-1 text-emerald-600">34</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="view hidden px-4 lg:px-6 py-6" id="create">
<div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

<div className="bg-white border border-gray-200 rounded-lg p-5">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight">Crear equipo</h2>
<span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700 border border-gray-200">Roles</span>
</div>
<form aria-label="Formulario de creación de equipo" className="mt-4 space-y-3" id="form-team">
<div>
<label className="text-sm font-medium" htmlFor="team-name">Nombre del equipo</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none text-sm bg-white" id="team-name" placeholder="Ej: Plataforma" required="" type="text"/>
</div>
<div>
<label className="text-sm font-medium" htmlFor="team-projects">Proyectos</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none text-sm bg-white" id="team-projects" placeholder="Separados por coma" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="text-sm font-medium">Agregar miembro</label>
<div className="mt-1 flex gap-2">
<input className="flex-1 px-3 py-2 rounded-md border border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none text-sm bg-white" id="member-name" placeholder="Nombre" type="text"/>
<button className="px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 text-sm" id="add-member" type="button">Agregar</button>
</div>
</div>
<div>
<label className="text-sm font-medium">Rol</label>
<select className="mt-1 w-full px-3 py-2 rounded-md border border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none text-sm bg-white" id="member-role">
<option>PM</option>
<option>Backend</option>
<option>Frontend</option>
<option>UX/UI</option>
<option>Data</option>
</select>
</div>
</div>
<div className="mt-2 p-3 rounded-md border border-gray-200 bg-gray-50 text-sm text-gray-700" id="members-list">
                  Sin miembros aún.
                </div>
<div className="flex items-center justify-between pt-2">
<div className="flex items-center gap-2 text-xs text-gray-500">
<i className="w-4 h-4" data-lucide="info"></i> Podés editar roles luego.
                  </div>
<button className="inline-flex items-center gap-2 text-sm font-medium bg-gray-900 text-white px-3 py-2 rounded-md hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">
<i className="w-4 h-4" data-lucide="save"></i> Crear equipo
                  </button>
</div>
</form>
</div>

<div className="bg-white border border-gray-200 rounded-lg p-5">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight">Crear tarea</h2>
<span className="text-xs px-2 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">Soporta recurrente</span>
</div>
<form aria-label="Formulario de creación de tarea" className="mt-4 space-y-3" id="form-task">
<div>
<label className="text-sm font-medium" htmlFor="task-title">Título</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none text-sm bg-white" id="task-title" placeholder="Ej: Configurar CI para API" required="" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="text-sm font-medium" htmlFor="task-assignee">Responsable</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none text-sm bg-white" id="task-assignee" placeholder="Nombre" type="text"/>
</div>
<div>
<label className="text-sm font-medium" htmlFor="task-priority">Prioridad</label>
<select className="mt-1 w-full px-3 py-2 rounded-md border border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none text-sm bg-white" id="task-priority">
<option>P1</option>
<option>P2</option>
<option>P3</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="text-sm font-medium" htmlFor="task-date">Fecha límite</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none text-sm bg-white" id="task-date" required="" type="date"/>
<p className="hidden mt-1 text-xs text-rose-600" id="task-date-error">La fecha no puede ser en el pasado.</p>
</div>
<div>
<label className="text-sm font-medium" htmlFor="task-project">Proyecto</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none text-sm bg-white" id="task-project" placeholder="Nombre de proyecto" type="text"/>
</div>
</div>
<div>
<label className="text-sm font-medium" htmlFor="task-tags">Etiquetas</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none text-sm bg-white" id="task-tags" placeholder="#infra, #bug" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="flex items-center gap-2">
<input className="peer h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" id="task-recurring" type="checkbox"/>
<label className="text-sm" htmlFor="task-recurring">Recurrente</label>
</div>
<div>
<label className="text-sm font-medium" htmlFor="task-frequency">Frecuencia</label>
<select className="mt-1 w-full px-3 py-2 rounded-md border border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none text-sm bg-white" disabled="" id="task-frequency">
<option>Diaria</option>
<option>Semanal</option>
<option>Mensual</option>
</select>
</div>
<div>
<label className="text-sm font-medium" htmlFor="task-interval">Intervalo</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none text-sm bg-white" disabled="" id="task-interval" min="1" type="number" value="1"/>
</div>
</div>
<div className="flex items-center justify-between pt-2">
<div className="flex items-center gap-2 text-xs text-gray-500">
<i className="w-4 h-4" data-lucide="bell"></i> Se notificará por Slack/Email
                  </div>
<button className="inline-flex items-center gap-2 text-sm font-medium bg-gray-900 text-white px-3 py-2 rounded-md hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">
<i className="w-4 h-4" data-lucide="save"></i> Crear tarea
                  </button>
</div>
</form>
</div>
</div>
</section>

<div aria-hidden="true" aria-modal="true" className="fixed inset-y-0 right-0 w-full sm:w-[480px] bg-white border-l border-gray-200 shadow-xl translate-x-full transition-transform duration-300 ease-out z-40" id="task-drawer" role="dialog">
<div className="h-16 px-4 border-b border-gray-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-700 border border-gray-200" id="drawer-task-id">#T-000</span>
<h3 className="text-base font-semibold tracking-tight" id="drawer-task-title">Título de la tarea</h3>
</div>
<button aria-label="Cerrar" className="p-2 rounded-md hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600" id="close-drawer">
<i className="w-5 h-5 text-gray-700" data-lucide="x"></i>
</button>
</div>
<div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-4rem)]">
<div className="grid grid-cols-2 gap-3">
<div className="p-3 rounded-md border border-gray-200">
<p className="text-xs text-gray-500">Responsable</p>
<p className="text-sm font-medium mt-1" id="drawer-assignee">—</p>
</div>
<div className="p-3 rounded-md border border-gray-200">
<p className="text-xs text-gray-500">Estado</p>
<div className="mt-1">
<select className="w-full px-2.5 py-1.5 rounded-md border border-gray-200 text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20" id="drawer-status">
<option>Pendiente</option>
<option>En curso</option>
<option>En revisión</option>
<option>Hecha</option>
<option>Bloqueada</option>
</select>
</div>
</div>
</div>
<div className="p-3 rounded-md border border-gray-200">
<p className="text-xs text-gray-500">Historial</p>
<ol className="mt-2 space-y-2 text-sm" id="drawer-history">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-gray-500 mt-0.5" data-lucide="clock"></i>
<span>Creada por <b>María</b> • hace 2 días</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-gray-500 mt-0.5" data-lucide="git-commit"></i>
<span>Asignada a <b>Javier</b> • hace 1 día</span>
</li>
</ol>
</div>
<div className="p-3 rounded-md border border-gray-200">
<p className="text-xs text-gray-500">Comentarios</p>
<div className="mt-2 space-y-3">
<div className="flex items-start gap-2">
<img alt="Javier" className="h-7 w-7 rounded-full" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 p-2 rounded-md border border-gray-200 bg-gray-50">
<p className="text-xs text-gray-500">Javier • hace 3h</p>
<p className="text-sm">Necesito acceso al bucket.</p>
</div>
</div>
<div className="flex items-center gap-2">
<input className="flex-1 px-3 py-2 rounded-md border border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none text-sm bg-white" placeholder="Escribir comentario..." type="text"/>
<button className="px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 text-sm"><i className="w-4 h-4" data-lucide="send"></i></button>
</div>
</div>
</div>
<div className="flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50" id="btn-export-task">
<i className="w-4 h-4" data-lucide="file-text"></i> Exportar CSV
              </button>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 text-sm" id="btn-mark-done"><i className="w-4 h-4" data-lucide="check"></i> Marcar hecha</button>
<button className="px-3 py-2 rounded-md bg-rose-600 text-white hover:bg-rose-700 text-sm" id="btn-mark-blocked"><i className="w-4 h-4" data-lucide="ban"></i> Bloquear</button>
</div>
</div>
</div>
</div>

<div className="hidden fixed right-4 top-20 z-50 w-80 bg-white border border-gray-200 rounded-lg shadow-lg p-4" id="filters-popover">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Filtros avanzados</h3>
<button className="p-1.5 rounded hover:bg-gray-100" id="close-filters"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
<div className="mt-3 space-y-3 text-sm">
<div className="flex items-center justify-between">
<span>Solo recurrentes</span>
<label className="inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<span className="w-10 h-6 bg-gray-200 rounded-full relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all peer-checked:bg-indigo-600 peer-checked:after:translate-x-4 border border-gray-300"></span>
</label>
</div>
<div className="flex items-center justify-between">
<span>Excluir bloqueadas</span>
<label className="inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<span className="w-10 h-6 bg-gray-200 rounded-full relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all peer-checked:bg-indigo-600 peer-checked:after:translate-x-4 border border-gray-300"></span>
</label>
</div>
<div>
<label className="block text-xs text-gray-500">Palabra clave</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none" placeholder="bug, release, etc." type="text" />
</input></div>
<div className="flex items-center justify-end gap-2">
<button className="px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50">Limpiar</button>
<button className="px-3 py-2 rounded-md bg-gray-900 text-white hover:bg-black">Aplicar</button>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
